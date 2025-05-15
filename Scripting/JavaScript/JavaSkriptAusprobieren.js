const readline = require("readline-sync");

class Person {
    this.name = name;
    this.age = age;
}

let name = readline.question("Wie heisst du? ");
const user = new Person(name);
console.log("Name: " + user.name);
console.log("Alter: " + user.age);