// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// 2019 OKIMS

pragma solidity ^0.5.0;

library Pairing {

    uint256 constant PRIME_Q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    struct G1Point {
        uint256 X;
        uint256 Y;
    }

    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint256[2] X;
        uint256[2] Y;
    }

    /*
     * @return The negation of p, i.e. p.plus(p.negate()) should be zero. 
     */
    function negate(G1Point memory p) internal pure returns (G1Point memory) {

        // The prime q in the base field F_q for G1
        if (p.X == 0 && p.Y == 0) {
            return G1Point(0, 0);
        } else {
            return G1Point(p.X, PRIME_Q - (p.Y % PRIME_Q));
        }
    }

    /*
     * @return The sum of two points of G1
     */
    function plus(
        G1Point memory p1,
        G1Point memory p2
    ) internal view returns (G1Point memory r) {

        uint256[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;

        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 6, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }

        require(success,"pairing-add-failed");
    }

    /*
     * @return The product of a point on G1 and a scalar, i.e.
     *         p == p.scalar_mul(1) and p.plus(p) == p.scalar_mul(2) for all
     *         points p.
     */
    function scalar_mul(G1Point memory p, uint256 s) internal view returns (G1Point memory r) {

        uint256[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 7, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success,"pairing-mul-failed");
    }

    /* @return The result of computing the pairing check
     *         e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
     *         For example,
     *         pairing([P1(), P1().negate()], [P2(), P2()]) should return true.
     */
    function pairing(
        G1Point memory a1,
        G2Point memory a2,
        G1Point memory b1,
        G2Point memory b2,
        G1Point memory c1,
        G2Point memory c2,
        G1Point memory d1,
        G2Point memory d2
    ) internal view returns (bool) {

        G1Point[4] memory p1 = [a1, b1, c1, d1];
        G2Point[4] memory p2 = [a2, b2, c2, d2];

        uint256 inputSize = 24;
        uint256[] memory input = new uint256[](inputSize);

        for (uint256 i = 0; i < 4; i++) {
            uint256 j = i * 6;
            input[j + 0] = p1[i].X;
            input[j + 1] = p1[i].Y;
            input[j + 2] = p2[i].X[0];
            input[j + 3] = p2[i].X[1];
            input[j + 4] = p2[i].Y[0];
            input[j + 5] = p2[i].Y[1];
        }

        uint256[1] memory out;
        bool success;

        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas, 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }

        require(success,"pairing-opcode-failed");

        return out[0] != 0;
    }
}

contract BatchUpdateStateTreeVerifier {

    using Pairing for *;

    uint256 constant SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint256 constant PRIME_Q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    struct VerifyingKey {
        Pairing.G1Point alpha1;
        Pairing.G2Point beta2;
        Pairing.G2Point gamma2;
        Pairing.G2Point delta2;
        Pairing.G1Point[21] IC;
    }

    struct Proof {
        Pairing.G1Point A;
        Pairing.G2Point B;
        Pairing.G1Point C;
    }

    function verifyingKey() internal pure returns (VerifyingKey memory vk) {
        vk.alpha1 = Pairing.G1Point(uint256(18818542628402675825652189369841018007776147684012568796690727744402243469616),uint256(12754335179533913306907367857085052392907974700411382785883670159027440546752));
        vk.beta2 = Pairing.G2Point([uint256(18891716253154457216727246258054703762405751869669837369177791021439689109524),uint256(6714651880960865981614920550128622806784546139532877661635095400460050521697)], [uint256(10864323410647606738411593606580730205420798225850464078787309177324538400040),uint256(18038449117450566836706392386702031177631280983921380843127293618757050237282)]);
        vk.gamma2 = Pairing.G2Point([uint256(1217839166809990567262628160914119228600834076020574350944380670266541700225),uint256(13184068380662462550405537903412106544266612097460641207588207619626607357323)], [uint256(6350652395609097874879203319765033163767326449487883172787745360855788449832),uint256(7452810581670888646245006931542352060829046930568712211186816172007312722298)]);
        vk.delta2 = Pairing.G2Point([uint256(19476564119847812369611427981095759196845927238834935018814086960821041006075),uint256(11689376593707695497541251868652063077837417186363348547951758667663863480400)], [uint256(15856212255951006779714899324721816647645319405906054908830144210148271836606),uint256(14127716947869427290943696733944698011671127637297339302065656546140797727695)]);
        vk.IC[0] = Pairing.G1Point(uint256(2064471443322284116450510131060051806509694061909492906895402494226607273509),uint256(19659755919876814738743169990691709772337295927237971260102973919530269434285));
        vk.IC[1] = Pairing.G1Point(uint256(9940398415544573479015581425058393765096761277417284012926386256783882783793),uint256(19475585801352209386390761481533837963380007676318255683436556782232568662969));
        vk.IC[2] = Pairing.G1Point(uint256(15856491640455807129457242852789142762321405959632360403809589747428404288186),uint256(8195039782989097534723376683184641117051735711260367651109177921235312462161));
        vk.IC[3] = Pairing.G1Point(uint256(1720128211537006799390697115836287925187421345875194461306667936455538814790),uint256(10257703245791404548045082399695805721661811600570593760026653392658148444878));
        vk.IC[4] = Pairing.G1Point(uint256(8286196600761679023877898340006155953863842914666181187970712046813963165472),uint256(4798702467412345021413853168503847680822976776408931719689187191249373794126));
        vk.IC[5] = Pairing.G1Point(uint256(7112867509204840111067655091348179480972244442412145423129870927370677536514),uint256(18381909512604571237905649656913959142867963167389661567313379557881095506781));
        vk.IC[6] = Pairing.G1Point(uint256(12595227228739681716278534506186139932621230005596665042645852606649005316218),uint256(12739797224949747763613416330698917715932425430615980554241636621632999360009));
        vk.IC[7] = Pairing.G1Point(uint256(13779062374587462946024548044278544853010252681018190482830299494505482782914),uint256(19547799963549226047587429279174112237320944353850632829734637761290887220013));
        vk.IC[8] = Pairing.G1Point(uint256(17316400249745337281933721374137704695126166956057827832398123394300861830037),uint256(17025031704103069326450489079275805471250158891352303409413368106271374062914));
        vk.IC[9] = Pairing.G1Point(uint256(9366774334236088590308208301260751827297764268528498681020394048866394170167),uint256(5724317622537317135595912901568396423852317095977052233605929326349875691887));
        vk.IC[10] = Pairing.G1Point(uint256(17921713413230353292891443982609836587770113383438712380636631305698303761125),uint256(20324273355056108200041814799909231803611469845007526525955156473561153492397));
        vk.IC[11] = Pairing.G1Point(uint256(10446098683417581072895178388650685858275596045934855981996555581381584800652),uint256(18452460376528282639330475618438102192108010570410994855698156780846035467038));
        vk.IC[12] = Pairing.G1Point(uint256(13824607004094534631376089529991631659519721926039273211698136909703184965242),uint256(17953428654390143299389706147907340123061370128739529077454869622619492991845));
        vk.IC[13] = Pairing.G1Point(uint256(9767854663728317931537905947369961228658194181993772284885184559018006950841),uint256(19486667475539090388839050200500087777374656456602401423412339471945017691603));
        vk.IC[14] = Pairing.G1Point(uint256(1244160003198163918584204496339503115553095157676343432970548321956303969217),uint256(13089263007477700419171838937602487982833156125117487500965101691271369536586));
        vk.IC[15] = Pairing.G1Point(uint256(7520398619934846279722909427510575060268172702500296111497633753460354037551),uint256(7074969911587291566164563942408025616028086799799514794405996530656936344080));
        vk.IC[16] = Pairing.G1Point(uint256(21636090412023493286167590549697945249807510929385605750860230193836487776309),uint256(8954708712009821600347890274533954591689668772795270716861072482619064531261));
        vk.IC[17] = Pairing.G1Point(uint256(4802691119845186678686961186589268565838397025712775600549347457419664541337),uint256(21490982030436760890052939686231326724856673647361948945424368516814655295814));
        vk.IC[18] = Pairing.G1Point(uint256(8535986059703015540861464091437031786975143797502826223823114205979154032117),uint256(20411007326177741160345746018805165403024895494018830034810581985931115122475));
        vk.IC[19] = Pairing.G1Point(uint256(1792136882804294797711933863832902077601753069058790428188482099014959178699),uint256(11888290124154158501796723943080502238499072840472532384266213021205176653324));
        vk.IC[20] = Pairing.G1Point(uint256(19758791464006032923595773139329112312331720024169665254538100041168294133883),uint256(4323954250495220481840135811312798975838232409706027316053309467715194408801));

    }
    
    /*
     * @returns Whether the proof is valid given the hardcoded verifying key
     *          above and the public inputs
     */
    function verifyProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[] memory input
    ) public view returns (bool) {

        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.C = Pairing.G1Point(c[0], c[1]);

        VerifyingKey memory vk = verifyingKey();

        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);

        // Make sure that proof.A, B, and C are each less than the prime q
        require(proof.A.X < PRIME_Q, "verifier-aX-gte-prime-q");
        require(proof.A.Y < PRIME_Q, "verifier-aY-gte-prime-q");

        require(proof.B.X[0] < PRIME_Q, "verifier-bX0-gte-prime-q");
        require(proof.B.Y[0] < PRIME_Q, "verifier-bY0-gte-prime-q");

        require(proof.B.X[1] < PRIME_Q, "verifier-bX1-gte-prime-q");
        require(proof.B.Y[1] < PRIME_Q, "verifier-bY1-gte-prime-q");

        require(proof.C.X < PRIME_Q, "verifier-cX-gte-prime-q");
        require(proof.C.Y < PRIME_Q, "verifier-cY-gte-prime-q");

        // Make sure that every input is less than the snark scalar field
        //for (uint256 i = 0; i < input.length; i++) {
        for (uint256 i = 0; i < 20; i++) {
            require(input[i] < SNARK_SCALAR_FIELD,"verifier-gte-snark-scalar-field");
            vk_x = Pairing.plus(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        }

        vk_x = Pairing.plus(vk_x, vk.IC[0]);

        return Pairing.pairing(
            Pairing.negate(proof.A),
            proof.B,
            vk.alpha1,
            vk.beta2,
            vk_x,
            vk.gamma2,
            proof.C,
            vk.delta2
        );
    }
}
