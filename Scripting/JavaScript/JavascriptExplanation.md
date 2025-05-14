# Programmieren mit JavaScript

## Erstes Script

1. Öffne Visual Studio Code
2. Erstelle eine neue Datei `hello.js`
3. Füge eine Ausgabe mit dem Text `"Hallo Welt"` ein
4. Öffne das Terminal und führe das Script mit `node hello.js` aus.

```javascript
console.log("Hallo Welt");
```

## Erweiterungen

### Variablen

1. Erstelle eine Variable namens `user` und speichere einen Namen darin
2. Gib die Variable aus

```javascript
let user = "Fritz";
console.log("Hallo " + user);
```

---

### Benutzereingaben (mit `readline-sync`)

1. Installiere `readline-sync` mit `npm install readline-sync`. Gib diesen befehl im Terminal ein. 
2. Frage den Benutzer nach seinem Namen und speichere ihn in der Variable `user`

```javascript
const readline = require("readline-sync");

let user = readline.question("Wie heisst du? ");
console.log("Hallo " + user);
```

---

### Bedingungen

1. Begrüsse den Benutzer speziell, wenn er "Fritz" heisst

```javascript
const readline = require("readline-sync");

let user = readline.question("Wie heisst du? ");
console.log("Hallo " + user);

if (user === "Fritz") {
  console.log("Schön, dass du da bist!");
}
```

---

### Schleifen

1. Erstelle eine Schleife, die 5-mal etwas ausgibt

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Durchlauf: " + i);
}
```

---

### Funktionen

Funktionen helfen uns, Code wiederzuverwenden.

1. Erstelle eine Funktion `sayHello()` und rufe sie auf

```javascript
function sayHello() {
  const readline = require("readline-sync");
  let user = readline.question("Wie heisst du? ");
  console.log("Hallo " + user);
  if (user === "Fritz") {
    console.log("Schön, dass du da bist!");
  }
}

sayHello();
sayHello(); // Was passiert, wenn du sie mehrmals aufrufst?
```

---

### Objekte und Klassen

Objekte speichern mehrere Informationen. Klassen helfen uns, Vorlagen dafür zu erstellen.

```javascript
class Person {
  constructor(name, age = 10) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 25);
console.log(person.name); // John
console.log(person.age);  // 25
```

#### Eingabe von Benutzerdaten

```javascript
const readline = require("readline-sync");

class Person {
  constructor(name, age = 10) {
    this.name = name;
    this.age = age;
  }
}

let name = readline.question("Wie heisst du? ");
const user = new Person(name);
console.log("Name: " + user.name);
console.log("Alter: " + user.age);
```

---

### Erweiterungsideen

* Nutze `Date`, um das aktuelle Datum anzuzeigen
* Erstelle ein kleines Quiz mit Fragen und Punktevergabe
* Gib dem Benutzer mehrere Auswahlmöglichkeiten (`readline.keyInSelect`)


# Programmieren mit JavaScript im Browser

## Erstes HTML + JS Script

1. Erstelle eine neue Datei `index.html`
2. Füge folgenden Code ein und öffne die Datei im Browser (Doppelklick reicht)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Hallo Welt</title>
</head>
<body>
  <h1>Hallo Welt mit JavaScript</h1>
  <script>
    alert("Hallo Welt!");
    console.log("Hallo Welt in der Konsole");
  </script>
</body>
</html>
```

---

## Eingabefeld und Ausgabe

1. Frage den Benutzer im Browser nach seinem Namen
2. Gib den Namen auf der Seite aus

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Hallo Benutzer</title>
</head>
<body>
  <h1>Willkommen</h1>
  <input type="text" id="nameInput" placeholder="Wie heisst du?">
  <button onclick="sayHello()">Sagen Hallo</button>
  <p id="output"></p>

  <script>
    function sayHello() {
      let name = document.getElementById("nameInput").value;
      let output = document.getElementById("output");
      output.textContent = "Hallo " + name;
      if (name === "Fritz") {
        output.textContent += " – Schön, dass du da bist!";
      }
    }
  </script>
</body>
</html>
```

---

## Bedingungen und Altersabfrage

1. Frage zusätzlich nach dem Alter
2. Begrüsse anders je nach Alter

```html
<body>
  <h1>Begrüssung</h1>
  <input type="text" id="nameInput" placeholder="Dein Name">
  <input type="number" id="ageInput" placeholder="Dein Alter">
  <button onclick="sayHello()">Los!</button>
  <p id="output"></p>

  <script>
    function sayHello() {
      let name = document.getElementById("nameInput").value;
      let age = parseInt(document.getElementById("ageInput").value);
      let output = document.getElementById("output");

      let message = "Hallo " + name;
      if (name === "Fritz") {
        message += " – Schön, dass du da bist!";
      }

      if (age < 18) {
        message += " Du bist noch jung!";
      } else {
        message += " Willkommen, Erwachsener!";
      }

      output.textContent = message;
    }
  </script>
</body>
```

---

## Schleifen und Listen anzeigen

Zeige dem Benutzer Zahlen von 1 bis 5 als Liste an:

```html
<body>
  <h1>Zahlenliste</h1>
  <button onclick="zeigeListe()">Liste anzeigen</button>
  <ul id="liste"></ul>

  <script>
    function zeigeListe() {
      let liste = document.getElementById("liste");
      liste.innerHTML = ""; // Leeren

      for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Zahl: " + i;
        liste.appendChild(li);
      }
    }
  </script>
</body>
```

---

## Funktionen und Wiederverwendbarkeit

Funktionen können helfen, den Code sauber zu halten. Beispiel:

```html
<script>
  function getInput(id) {
    return document.getElementById(id).value;
  }

  function outputText(text) {
    document.getElementById("output").textContent = text;
  }

  function sayHello() {
    let name = getInput("nameInput");
    let age = parseInt(getInput("ageInput"));

    let msg = "Hallo " + name;
    if (age < 18) {
      msg += ", du bist jung!";
    }
    outputText(msg);
  }
</script>
```

---

## Bonus: Farben oder Texte verändern (DOM-Manipulation)

```html
<body>
  <h1 id="headline">Klick auf mich!</h1>

  <script>
    document.getElementById("headline").addEventListener("click", () => {
      document.getElementById("headline").style.color = "blue";
      document.getElementById("headline").textContent = "Danke für den Klick!";
    });
  </script>
</body>
```