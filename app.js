function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }
    return result;
}
console.log(combine(10, 20, "as-number"));
console.log(combine("10", "20", "as-number"));
console.log(combine("d", "b", "as-text"));
