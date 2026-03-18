<h1 align="center" style="color: #00FF00;">>> MODULO_WEB // PRO_EDITOR_IDE 💻</h1>

<p align="center">
  <i>Un vero e proprio IDE (Integrated Development Environment) basato su browser. Un clone avanzato in stile CodePen con Live Preview, Syntax Highlighting e Linting in tempo reale.</i>
</p>

---

## 🚀 PANORAMICA DEL SISTEMA

Questo progetto non è un semplice sito statico, ma un'applicazione web complessa che manipola il DOM in tempo reale. Permette di scrivere codice HTML, CSS e JavaScript e vederne il risultato istantaneamente in un iframe sandboxato.

### ⚙️ Core Features (Specifiche Tecniche)
* **Motore CodeMirror 5:** Integrazione completa con autocompletamento dei tag, chiusura automatica delle parentesi e formattazione del codice.
* **Real-Time Linting:** Rilevamento degli errori di sintassi in tempo reale grazie all'integrazione di `JSHint`, `CSSLint` e `HTMLHint`. I "pallini rossi" avvisano lo sviluppatore prima ancora di eseguire il codice.
* **Gestione Temi:** Switch dinamico tra temi professionali (Monokai, Dracula, Material Darker, Nord) tramite manipolazione CSS Variables.
* **I/O File System:** Capacità di esportare il progetto completo in un singolo file `.html` o di caricare file esistenti direttamente dal PC locale.
* **Templates Pronti:** Sistema di caricamento rapido di snippet precompilati (Tutorial Card, Orologio Digitale).

---

## 🗂️ ARCHITETTURA DEI FILE

Il progetto è diviso in modo rigoroso tra UI, Stili e Logica applicativa:

| File | Funzione |
| :--- | :--- |
| 📄 `index.html` | Struttura principale dell'interfaccia e importazione delle librerie CDN (CodeMirror, Linters). |
| 🎨 `style.css` | Design di sistema, gestione del layout a griglia/flexbox e variabili CSS per i temi Dark/Light. |
| 🧠 `script.dev.js` | **Sorgente di Sviluppo:** Il codice sorgente leggibile e commentato. Contiene la logica di binding degli editor, l'aggiornamento dell'iframe e la gestione eventi. |
| 🔒 `script.min.js` | **Build di Produzione:** Versione minificata e offuscata del motore JS per ottimizzare il caricamento e proteggere la logica. |
| 📦 `tutorial-*.html` | Componenti template caricabili dinamicamente nell'editor. |

---

## 🛠️ DEPLOYMENT & UTILIZZO

L'ambiente è completamente *client-side* (non richiede server Node.js o database).

1. Clona o scarica questa repository.
2. Apri il file `index.html` con qualsiasi browser moderno (Chrome, Firefox, Edge).
3. Inizia a digitare nei tre pannelli (HTML/CSS/JS) o seleziona un template dal menu superiore per vedere l'iframe aggiornarsi in tempo reale.

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_CATALOGO_WEB-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>