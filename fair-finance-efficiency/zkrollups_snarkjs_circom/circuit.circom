// create template
template SimpleChecks() {

    // declare a variables which will store private inputs
    signal private input a;
    signal private input b;
    signal private input d;

    // declare public input variables
    signal input c;

    // declate output variables
    signal output out;

    // force a + b = c
    a + b === c;

    // assign output to output variable
    out <== c + d;
}

// export the template
component main = SimpleChecks();
