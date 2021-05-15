// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Evans",
//     age: 10,
//     hobbies: ["Football", "Music"],
//     role: [3, "author"]
// };
//Enum with custom starting position
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 4] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Evans",
    age: 10,
    hobbies: ["Football", "Music"],
    role: Role.ADMIN
};
// person.role.push("admin")
// any Array
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleLowerCase());
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
