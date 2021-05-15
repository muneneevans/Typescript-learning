//unknown
let userInput: unknown
let userName: string

userInput = 4
userInput = "evans"
if (typeof userInput === 'string') {
    userName = userInput
}


//never
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
    //white (true) {}
}

const result = generateError("an error occurred", 500)
console.log(result)