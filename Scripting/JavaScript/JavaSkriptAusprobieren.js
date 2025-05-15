const readline = require("readline-sync");

class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
}

let name = readline.question("Wie heisst du? ");

let alter = readline.question("Wie alt bist du? ");
const user = new Person(name, alter);
console.log("Name: " + user.name);
console.log("Alter: " + user.age);