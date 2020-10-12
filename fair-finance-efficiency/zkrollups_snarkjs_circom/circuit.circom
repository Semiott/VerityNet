// create template
template FairFinanceFactors() {

    // declare a variables which will store private inputs
    signal private input credit;
    signal private input debit;

    // declare public input variables
    signal input stake;
    signal input future;
    signal input past;

    // declate output variables
    signal output out;

    // sum of differences
    credit + stake === future;
    debit - stake === past:

    // assign output to output variable
    out <== future + past;
}

// export the template
component main = FairFinanceFactors();
