function add(n1: number, n2: number): number {
    return n1 + n2
}

// only for demo, don't return undefined
function printResultUndefined(num: number): undefined {
    console.log("result: " + num)
    return;
}
function printResult(num: number): void {
    console.log("result: " + num)
    return;
}

//callbacks with parameters
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    let result = n1 + n2
    cb(result)
}

// pointers & function types
let combineValue: (a: number, b: number) => number;
combineValue = add;


console.log(combineValue(5, 12))

addAndHandle(1, 2, (r) => { console.log(r) })