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
* **Frontend Camouflage:** Interfaccia utente pulita e minimale, progettata in HTML5 e CSS3 per replicare il design system dei moderni portali cloud aziendali e indurre fiducia nell'utente.
* **Trasmissione Sicura (POST):** I dati inseriti vengono incapsulati nel corpo della richiesta HTTP, evitando che le credenziali appaiano in chiaro nell'URL.
* **Intercettazione Backend (PHP):** Uno script lato server cattura i pacchetti in arrivo, estrae i parametri chiave e li registra in `logs.txt` con timestamp.
* **Evasion Tactics:** Subito dopo il furto dei dati, il server esegue un reindirizzamento forzato verso un sito legittimo per coprire le tracce.
* **Isolamento Docker:** L'intero ambiente server (Apache + PHP) è containerizzato.

---

## 🛠️ DEPLOYMENT & UTILIZZO (Ambiente Locale)

1. Apri il terminale e naviga nella cartella `/Red_Team_Sim`.
2. Avvia il server containerizzato digitando il seguente comando:
   <pre><code>docker-compose up -d</code></pre>
3. Apri il browser e vai all'indirizzo <code>http://localhost:8080</code>.
4. Per spegnere il server a fine operazione, utilizza:
   <pre><code>docker-compose down</code></pre>

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_A_03_WEB_FRONTEND-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>

<br>
<div align="center">
  <p style="color: #00FF00;">
    🔌 <i>// FINE_TRASMISSIONE_MODULO_RED_TEAM</i>
  </p>
</div>