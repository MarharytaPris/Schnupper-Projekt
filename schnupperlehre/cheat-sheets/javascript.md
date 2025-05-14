# 📝 JavaScript-Spickzettel (Cheat Sheet)

## 📦 Variablen und Datentypen

### Variablen deklarieren

```javascript
let name = "Alex"; // Kann später geändert werden
const age = 12; // Kann NICHT geändert werden
var school = "Lincoln"; // Alte Schreibweise (nutze besser let oder const)
```

### Datentypen

```javascript
// Zahlen
let count = 10;
let price = 9.99;
let age = parseInt("16"); // String in Zahl umwandeln

// Zeichenketten (Strings)
let greeting = "Hallo, Welt!";
let name = "Sarah";
let age = String(16); // Zahl in String umwandeln

// Wahrheitswerte (Booleans)
let isRaining = true;
let isHoliday = false;

// Arrays (Listen)
let colors = ["rot", "grün", "blau"];
let numbers = [1, 2, 3, 4, 5];

// Objekte (Daten mit Eigenschaften)
let person = {
  name: "Jamie",
  age: 11,
  likesCoding: true,
};

// Datentyp überprüfen
let numberType = typeof 5; // Gibt "number" zurück
let stringType = typeof "Hallo"; // Gibt "string" zurück
```

## ➕ Operatoren

### Mathematische Operatoren

```javascript
let a = 5 + 3; // Addition: a = 8
let b = 10 - 4; // Subtraktion: b = 6
let c = 3 * 7; // Multiplikation: c = 21
let d = 20 / 5; // Division: d = 4
let e = 10 % 3; // Restwert (Modulo): e = 1
```

### Vergleichsoperatoren

```javascript
let result1 = 5 > 3; // Größer als: true
let result2 = 5 < 3; // Kleiner als: false
let result3 = 5 >= 5; // Größer oder gleich: true
let result4 = 5 <= 4; // Kleiner oder gleich: false
let result5 = 5 === 5; // Exakt gleich: true
let result6 = 5 !== 3; // Ungleich: true
```

## 💬 Konsole

### Ausgabe

```javascript
// Text in der Konsole ausgeben (praktisch zum Testen)
console.log("Hallo, Welt!");
console.log(2 + 2);
console.log("Mein Name ist " + name);
```

### Eingabe

```javascript
// Benutzereingabe über Konsole (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Wie heißt du? ", (name) => {
  console.log("Mein Name ist " + name);
  rl.close();
});
```

## 🔗 Zeichenketten verbinden

```javascript
// Strings verketten (zusammenfügen)
let firstName = "Alex";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // "Alex Smith"

// Template-Strings (moderne, übersichtliche Schreibweise)
let greeting = `Hallo, ${firstName}!`; // "Hallo, Alex!"
```

## 🔀 Bedingte Anweisungen

### If-Else

```javascript
let age = 12;

if (age < 10) {
  console.log("Du bist ein Kind");
} else if (age < 18) {
  console.log("Du bist ein Teenager");
} else {
  console.log("Du bist ein Erwachsener");
}
```

## ⚙️ Funktionen

### Funktionen definieren und aufrufen

```javascript
// Funktion definieren
function sayHello(name) {
  return "Hallo, " + name + "!";
}

// Funktion aufrufen
let greeting = sayHello("Jamie");
console.log(greeting);

// Funktion mit mehreren Parametern
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // sum = 8
```

## 🔁 Schleifen

### For-Schleife

```javascript
// Von 1 bis 5 zählen
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### While-Schleife

```javascript
// Alternative Zählweise von 1 bis 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## 🧺 Arbeiten mit Arrays

### Grundlagen zu Arrays

```javascript
let fruits = ["Apfel", "Banane", "Orange"];

// Auf Elemente zugreifen (Index beginnt bei 0)
console.log(fruits[0]); // "Apfel"
console.log(fruits[1]); // "Banane"

// Länge des Arrays
console.log(fruits.length); // 3

// Element am Ende hinzufügen
fruits.push("Traube");

// Letztes Element entfernen
let lastFruit = fruits.pop();

// Mit Schleife durch das Array gehen
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Einfachere Methode
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

## 🖱️ Ereignisse (Events) für Webseiten

### Klick-Events

```javascript
// Wenn ein Button geklickt wird
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button wurde geklickt!");
});
```

## 🖼️ DOM-Manipulation (Webseite verändern)

### HTML-Elemente verändern

```javascript
// Text ändern
document.getElementById("demo").innerHTML = "Neuer Text!";

// Stil ändern
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "20px";

// Elemente ein- oder ausblenden
document.getElementById("demo").style.display = "none";   // Ausblenden
document.getElementById("demo").style.display = "block";  // Einblenden

// Häufig genutzte DOM-Funktionen:

// Element auswählen
document.getElementById("elementId")

// Ereignis hinzufügen (z. B. Klick)
element.addEventListener("click", function() { ... })

// Neues Element erstellen
document.createElement("li")

// Text in ein Element schreiben
element.textContent = "Text"

// Element zu einem anderen hinzufügen
parentElement.appendChild(childElement)

// Eingabewert auslesen
document.getElementById("inputId").value

// Letztes Element aus einer Liste entfernen
parentElement.removeChild(parentElement.lastElementChild)
```

## Alert

```Javascript
//  Pop up mit dem Text Hallo! Willkommen!
alert("Hallo! Willkommen!");

```

## Mehr Tips und Tricks:

https://www.w3schools.com/js/default.asp
