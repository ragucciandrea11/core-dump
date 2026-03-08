<h1 align="center" style="color: #00FF00;">
  >> 02_INTERFACCIA_FISICA // (Arduino Core) ⚙️
</h1>

<p align="center">
  <i>Directory di livello 2. Contiene firmware in C++, schemi di cablaggio e collaudi fisici di microcontrollori.</i>
</p>

---

## 📋 INDICE DEI MODULI // (Circuiti Caricati)

Di seguito l'elenco dei sistemi hardware attualmente operativi. Ogni modulo è isolato e contiene la simulazione virtuale, il codice sorgente e le prove di deployment fisico.

| Directory Modulo | Descrizione Operazione | Componenti Chiave | Stato |
| :--- | :--- | :--- | :---: |
| 📁 **`/Radar_Ultrasuoni`** | Rilevatore di prossimità a 3 stadi con feedback visivo e allarme acustico. | HC-SR04, LED, Buzzer | 🟢 Attivo |
| 📁 **`/modulo_2`** | *[In attesa di assegnazione]* | *-* | ⚪ Vuoto |
| 📁 **`/modulo_3`** | *[In attesa di assegnazione]* | *-* | ⚪ Vuoto |

---

## ⚙️ PROTOCOLLO DI COLLAUDO

Per replicare o testare i moduli hardware presenti in questa sezione, segui i due step operativi:

### 1. Ambiente Virtuale (Sicurezza)
All'interno di ogni modulo troverai le immagini del cablaggio (Breadboard). Ricostruisci il circuito su [Tinkercad Circuits](https://www.tinkercad.com/) per testare i flussi di corrente senza rischiare di bruciare componenti fisici.

### 2. Flashing del Firmware (Hardware)
Quando il cablaggio reale è pronto:
1. Collega la scheda Arduino al PC tramite cavo USB.
2. Apri il file sorgente (`.ino`) con l'**Arduino IDE**.
3. Seleziona la porta corretta dal menu `Strumenti -> Porta` (es. COM3, COM4).
4. Compila e **Carica** il codice nel microcontrollore.

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_SISTEMA_CENTRALE-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>