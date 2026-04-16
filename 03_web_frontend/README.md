<h1 align="center" style="color: #00FF00;">
  >> 03_SVILUPPO_WEB // (Frontend & Client-Server) 🌐
</h1>

<p align="center">
  <i>Directory di livello 3. Contiene applicazioni web, manipolazione del DOM, esperimenti UI/UX e architetture client-server leggere.</i>
</p>

---

## 📋 INDICE DEI MODULI // (Web Apps)

Di seguito l'elenco delle applicazioni e degli script web attualmente operativi. 

| Directory Modulo | Descrizione Operazione | Tecnologie | Stato |
| :--- | :--- | :--- | :---: |
| 📁 **`/Pro_Editor`** | IDE basato su browser con Live Preview, Syntax Highlighting (CodeMirror) e Real-Time Linting. | HTML, CSS, JS | 🟢 Attivo |
| 📁 **`/Red_Team_Sim`** | **[Phishing Simulator]** Dimostrazione di intercettazione credenziali (metodo POST) tramite frontend camuffato e backend. | HTML, CSS, PHP, Docker | 🟢 Attivo |
| 📁 **`/webapp_3`** | *[In attesa di assegnazione]* | *-* | ⚪ Vuoto |

---

## ⚙️ PROTOCOLLO DI ESECUZIONE

L'ecosistema di questa directory contiene sia interfacce puramente **Client-Side**, sia architetture **Client-Server** ibride.

**🟢 Avvio Moduli Standard (Solo Frontend):**
Per progetti come `Pro_Editor`, non è richiesto alcun server.
1. Naviga all'interno della cartella del modulo.
2. Fai doppio clic sul file **`index.html`** per aprirlo direttamente nel tuo browser predefinito.
*(Consigliato l'uso dell'estensione **Live Server** su VS Code per funzionalità avanzate).*

**☢️ Avvio Moduli Avanzati (Richiedono Backend):**
Per progetti come `Red_Team_Sim` che elaborano dati tramite PHP:
1. Apri il terminale nella cartella del progetto.
2. Innesca il server locale tramite l'infrastruttura containerizzata digitando: `docker-compose up -d`.
3. Accedi tramite il browser all'indirizzo localhost indicato nel README specifico del modulo.

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_SISTEMA_CENTRALE-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>