function add(n1, n2) {
    return n1 + n2;
}
// only for demo, don't return undefined
function printResultUndefined(num) {
    console.log("result: " + num);
    return;
}
function printResult(num) {
    console.log("result: " + num);
    return;
}
//callbacks with parameters
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// pointers & function types
var combineValue;
combineValue = add;
console.log(combineValue(5, 12));
addAndHandle(1, 2, function (r) { console.log(r); });
