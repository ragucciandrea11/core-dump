<h1 align="center" style="color: #00FF00;">>> MODULO_WEB // PRO_EDITOR_IDE 💻</h1>

<p align="center">
  <i>Un vero e proprio IDE (Integrated Development Environment) basato su browser. Un clone avanzato in stile CodePen con Live Preview, Syntax Highlighting e Linting in tempo reale.</i>
</p>

<div align="center">
  <a href="https://ragucciandrea11.github.io/core-dump/03_web_frontend/Pro_Editor/" target="_blank">
    <img src="https://img.shields.io/badge/🔴_LIVE_DEMO-APRI_L'EDITOR_NEL_BROWSER-FF0000?style=for-the-badge" alt="Live Demo" />
  </a>
</div>
<br>

---

## 🚀 PANORAMICA DEL SISTEMA

Questo progetto non è un semplice sito statico, ma un'applicazione web complessa che manipola il DOM in tempo reale. Permette di scrivere codice HTML, CSS e JavaScript e vederne il risultato istantaneamente in un iframe sandboxato.

### ⚙️ Core Features (Specifiche Tecniche)
* **Motore CodeMirror 5:** Integrazione completa con autocompletamento dei tag, chiusura automatica delle parentesi e formattazione del codice.
* **Real-Time Linting:** Rilevamento degli errori di sintassi in tempo reale grazie all'integrazione di `JSHint`, `CSSLint` e `HTMLHint`. I "pallini rossi" avvisano lo sviluppatore prima ancora di eseguire il codice.
* **Gestione Temi:** Switch dinamico tra temi professionali (Monokai, Dracula, Material Darker, Nord) tramite manipolazione CSS Variables.
* **I/O File System:** Capacità di esportare il progetto completo in un singolo file `.html` o di caricare file esistenti direttamente dal PC locale.
* **Templates Pronti:** Sistema di caricamento rapido di snippet precompilati (Tutorial Card, Orologio Digitale, Documento Vuoto).

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
| 📄 `vuoto.html` | Template per azzerare l'ambiente di lavoro. |

---

## 🛠️ DEPLOYMENT & UTILIZZO

L'ambiente è progettato per funzionare in modo 100% *client-side*, senza necessità di server backend.

**Opzione 1: Live Server (GitHub Pages)**
Clicca sul badge "LIVE DEMO" in cima a questa pagina per avviare l'editor direttamente dal tuo browser tramite il server di GitHub.

**Opzione 2: Esecuzione Locale**
1. Clona o scarica questa repository sul tuo PC.
2. Naviga nella cartella `/Pro_Editor`.
3. Fai doppio clic sul file `index.html` per aprirlo. Tutto il codice verrà eseguito localmente sul tuo browser.

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_CATALOGO_WEB-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>