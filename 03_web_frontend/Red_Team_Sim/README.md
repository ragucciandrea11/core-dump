<h1 align="center" style="color: #00FF00;">>> MODULO_WEB // RED_TEAM_SIM 🎣</h1>

<p align="center">
  <i>Simulatore di Phishing Educativo (Credential Harvesting). Dimostrazione tattica di intercettazione dati tramite manipolazione frontend e backend PHP.</i>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/⚠️_USO_ESCLUSIVAMENTE_ETICO_ED_EDUCATIVO-FF8C00?style=for-the-badge" alt="Ethical Use Only" />
</div>
<br>

---

## 🚀 PANORAMICA DEL SISTEMA

Questo progetto è una simulazione di un attacco di Ingegneria Sociale. Dimostra come un'interfaccia web apparentemente innocua (Frontend) possa essere utilizzata per raccogliere credenziali sensibili e trasmetterle di nascosto a un server ostile (Backend).

### ⚙️ Core Features (Specifiche Tecniche)
* **Frontend Camouflage:** Interfaccia utente pulita e minimale, progettata in HTML5 e CSS3 per replicare il design system dei moderni portali cloud aziendali (es. Microsoft, Google) e indurre fiducia nell'utente.
* **Trasmissione Sicura (POST):** I dati inseriti vengono incapsulati nel corpo della richiesta HTTP (metodo `POST`), evitando che le credenziali appaiano in chiaro nell'URL del browser.
* **Intercettazione Backend (PHP):** Uno script lato server cattura i pacchetti in arrivo, estrae i parametri chiave (email, password) e li registra silenziosamente con un timestamp di sistema.
* **Evasion Tactics:** Subito dopo il furto dei dati, il server esegue un reindirizzamento forzato (`header location`) verso un sito legittimo per coprire le proprie tracce e non destare sospetti nella vittima.
* **Isolamento Docker:** L'intero ambiente server (Apache + PHP) è containerizzato e non richiede installazioni locali invasive sul sistema host.

---

## 🗂️ ARCHITETTURA DEI FILE

Il progetto è diviso chirurgicamente in due aree: l'esca (Client) e la rete (Server).

| File | Area | Funzione |
| :--- | :---: | :--- |
| 📄 `index.html` | Front-End | **L'Esca:** Struttura del modulo di accesso e logica di invio (`<form>`). |
| 🎨 `style.css` | Front-End | **Il Camuffamento:** Design di sistema, layout flessibile e interazioni visive. |
| 🧠 `cattura.php` | Back-End | **La Trappola:** Script che processa la richiesta POST, salva i dati ed esegue il redirect. |
| 🐳 `docker-compose.yml`| DevOps | **L'Infrastruttura:** Ricetta per istanziare istantaneamente un server web Apache con interprete PHP 8.2. |
| 🗃️ `logs.txt` | Storage | **Il Vault:** File di testo (generato dinamicamente) dove vengono archiviate le credenziali catturate. |

---

## 🛠️ DEPLOYMENT & UTILIZZO (Ambiente Locale)

*Nota: Dato che questo modulo richiede l'esecuzione di codice lato server (PHP), non può essere ospitato staticamente su GitHub Pages. Utilizzare l'infrastruttura Docker fornita.*

**Protocollo di Innesco:**
1. Clona o scarica questa repository sul tuo PC locale.
2. Apri il terminale e naviga nella cartella `/Red_Team_Sim`.
3. Avvia il server containerizzato digitando:
   ```bash
   docker-compose up -d