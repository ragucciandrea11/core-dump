<h1 align="center" style="color: #00FF00;">
  >> 01_LOGICA_SINTETICA // (Python Core) 🐍
</h1>

<p align="center">
  <i>Directory di livello 2. Contiene script di automazione, manipolazione dati e logica di backend scritti in Python.</i>
</p>

---

## 📋 INDICE DEI MODULI // (Script Caricati)

Di seguito l'elenco dei programmi attualmente operativi. Ogni modulo è isolato nella propria directory.

| Directory Modulo | Descrizione Operazione | Dipendenze / Librerie | Stato |
| :--- | :--- | :--- | :---: |
| 📁 **`/AuraFarming`** | Player video da terminale che converte i frame in testo ASCII in tempo reale. Sincronizzazione audio inclusa. | `opencv-python`, `ffpyplayer`, `Pillow`, `numpy` | 🟢 Attivo |
| 📁 **`/cartella2`** | *[In attesa di assegnazione]* | *-* | ⚪ Vuoto |
| 📁 **`/cartella3`** | *[In attesa di assegnazione]* | *-* | ⚪ Vuoto |

---

## ☁️ AMBIENTE CLOUD // (Sandbox Interattiva)

<p align="left">
  <img src="https://readme-typing-svg.herokuapp.com?font=Courier+New&weight=600&size=16&pause=1000&color=00FF00&vCenter=true&width=400&lines=>_Connessione_al_Server_Cloud...;>_Inizializzazione_Sandbox...;>_Terminale_Pronto_all'uso." alt="Terminale Animato" />
</p>

Vuoi scrivere e testare del codice Python da zero, importando le tue librerie, ma senza toccare il tuo sistema locale? 

Accedi al terminale cloud isolato di Google Colab. Avrai a disposizione un ambiente vuoto pronto all'uso direttamente nel browser. Se ti servono librerie specifiche, ti basterà installarle scrivendo `!pip install nome_libreria` nella prima cella.

> ⚠️ **ATTENZIONE // PROTOCOLLO DI USCITA:** > Per non disconnetterti da questo hub centrale, **clicca sul pulsante qui sotto con la ROTELLINA DEL MOUSE** oppure premi **CTRL + Clic** (Windows) / **CMD + Clic** (Mac) per aprire l'ambiente in una nuova scheda.

<br>

<div align="left">
  <a href="https://colab.research.google.com/#create=true">
    <img src="https://img.shields.io/badge/AVVIA_TERMINALE_CLOUD-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white&borderColor=F9AB00" alt="Avvia Colab" />
  </a>
</div>

---

## ⚙️ PROTOCOLLO DI ESECUZIONE // (Tutorial per Novizi)

Questo repository utilizza script Python che potrebbero richiedere librerie esterne. Per evitare di inquinare il tuo sistema operativo, **è obbligatorio utilizzare un Ambiente Virtuale (venv)**. 

Segui questa procedura passo-passo dal tuo terminale:

### 1. Entra nel modulo desiderato
Apri il terminale (o Git Bash) e spostati nella cartella del programma che vuoi eseguire:
```bash
cd nome_della_cartella
# Esempio: cd cartella1
```

### 2. Crea lo Scudo Isolante (Ambiente Virtuale)
Crea un ambiente virtuale chiamato `venv` per isolare questo specifico programma:
```bash
python -m venv venv
```
*(Questo creerà una nuova cartella nascosta chiamata `venv` che conterrà il motore Python isolato).*

### 3. Attiva l'Ambiente Virtuale
Devi "accendere" l'ambiente virtuale prima di fare qualsiasi altra cosa.
* **Su Windows (Prompt dei comandi / PowerShell):**
  ```bash
  .\venv\Scripts\activate
  ```
* **Su Windows (Git Bash):**
  ```bash
  source venv/Scripts/activate
  ```
* **Su Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```
*(Se fatto correttamente, vedrai la scritta `(venv)` apparire all'inizio della riga del tuo terminale).*

### 4. Installa i Componenti (Librerie)
Ora che lo scudo è attivo, installa tutte le librerie necessarie al programma leggendole dal file dei requisiti:
```bash
pip install -r requirements.txt
```
*(Nota: se lo script non ha librerie esterne, puoi saltare questo passaggio).*

### 5. Esegui il Motore
Lancia lo script principale:
```bash
python main.py
```
*(Sostituisci `main.py` con il nome effettivo del file Python se è diverso).*

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_SISTEMA_CENTRALE-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>
