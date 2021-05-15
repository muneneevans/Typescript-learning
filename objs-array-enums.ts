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
enum Role {
    ADMIN = 4, READ_ONLY, AUTHOR
}

const person = {
    name: "Evans",
    age: 10,
    hobbies: ["Football", "Music"],
    role: Role.ADMIN
};


// person.role.push("admin")

// any Array
let favoriteActivities: any[]
favoriteActivities = ["Sports"]

console.log(person.role)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase())
}

if (person.role === Role.AUTHOR) {
    console.log("is author")
}