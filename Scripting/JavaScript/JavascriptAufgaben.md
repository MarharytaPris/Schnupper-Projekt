# JavaScript Übungen

## 🖥 **Teil 1: Konsole **

### Aufgabe 1: Hallo Welt

Schreibe ein JavaScript-Programm, das `"Hallo Welt"` in der Konsole ausgibt.

```bash
node deineDatei.js
```

```javascript
console.log("Hallo Welt");
```

---

### Aufgabe 2: Einfache Addition

Berechne 1 + 1 und gib das Ergebnis in der Konsole aus.

```javascript
console.log(1 + 1); // Ausgabe: 2
```

---

### Aufgabe 3: Variablen verwenden

Erstelle zwei Variablen `a` und `b` mit den Werten 5 und 10. Berechne ihre Summe und gib das Ergebnis aus.

```javascript
let a = 5;
let b = 10;
let summe = a + b;
console.log("Summe:", summe);
```

---

### Aufgabe 4: Eine Funktion schreiben

Erstelle eine Funktion `greet`, die einen Namen entgegennimmt und `"Hallo, [Name]!"` in der Konsole ausgibt.

```javascript
function greet(name) {
  console.log("Hallo, " + name + "!");
}

greet("Anna");
```

---

### Aufgabe 5: Eine Schleife verwenden

Gib mit einer Schleife die Zahlen von 1 bis 5 in der Konsole aus.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 🌐 **Teil 2: Im Browser (HTML + JavaScript)**

### Aufgabe 6: Benutzerdaten abfragen

Frage den Benutzer nach Vorname, Nachname, Adresse und Lieblingsfarbe. Gib diese im Browser aus.
Tipp: Nutze `input`, `button`, `innerText`.

---

### Aufgabe 7: Lieblingsstadt

Frage den Benutzer nach seiner Lieblingsstadt. Gib sie auf der Seite aus.
Wenn die Stadt z.B. `"Berlin"` ist, schreibe zusätzlich: `"Das ist auch meine Lieblingsstadt!"`

---

### Aufgabe 8: Funktion `myCity`

Verpacke die Logik von Aufgabe 7 in eine Funktion mit dem Namen `myCity()` und rufe sie beim Klick auf einen Button auf.

---

### Aufgabe 9: Zahlenschleife im Browser

Erstelle eine Schaltfläche, die beim Klick eine Liste mit den Zahlen 1 bis 10 im `<ul>` anzeigt.

---

### Aufgabe 10: Dynamisches Styling

Lass den Benutzer seine Lieblingsfarbe eingeben und setze damit die Hintergrundfarbe der Seite.
