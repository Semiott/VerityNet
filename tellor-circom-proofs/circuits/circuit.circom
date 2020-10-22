template DataDisputeFactors() {

    // declare a variables which will store private inputs
    signal private input sender;
    signal private input receiver;

    // declare public input variables
    signal input route;
    signal input map;
    signal input time;

    // declate output variables
    signal output out;

    // sum of differences
    sender + time === route;
    receiver - time === map;

    // assign output to output variable
    out <== route + map;
}

// export the template
component main = DataDisputeFactors();
