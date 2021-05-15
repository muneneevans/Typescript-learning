//unknown
var userInput;
var userName;
userInput = 4;
userInput = "evans";
if (typeof userInput === 'string') {
    userName = userInput;
}
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //white (true) {}
}
var result = generateError("an error occurred", 500);
console.log(result);
