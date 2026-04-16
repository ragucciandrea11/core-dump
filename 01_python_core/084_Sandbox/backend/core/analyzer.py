import hashlib
import os
import requests
import re
from dotenv import load_dotenv

# Carica il vault delle chiavi segrete
load_dotenv()

class ShieldAnalyzer:
    def __init__(self, file_path):
        self.file_path = file_path
        self.file_name = os.path.basename(file_path)
        self.vt_api_key = os.getenv("VIRUSTOTAL_API_KEY")

    def analyze_dna(self):
        """Calcola l'impronta crittografica (SHA256)."""
        sha256_hash = hashlib.sha256()
        try:
            with open(self.file_path, "rb") as f:
                for byte_block in iter(lambda: f.read(4096), b""):
                    sha256_hash.update(byte_block)
            return sha256_hash.hexdigest()
        except Exception as e:
            return None

    def query_the_index(self, file_hash):
        """Interroga l'Indice globale (VirusTotal)."""
        if not self.vt_api_key:
            return {"error": "Chiave API mancante nel file .env"}

        url = f"https://www.virustotal.com/api/v3/files/{file_hash}"
        headers = {
            "accept": "application/json",
            "x-apikey": self.vt_api_key
        }

        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                data = response.json()
                stats = data['data']['attributes']['last_analysis_stats']
                return {"status": "Identificato", "threat_level": stats}
            elif response.status_code == 404:
                return {"status": "Sconosciuto", "message": "Possibile minaccia Zero-Day."}
            else:
                return {"error": f"Errore server: {response.status_code}"}
        except Exception as e:
            return {"error": f"Errore di rete: {str(e)}"}

    def extract_tactical_data(self):
        """Estrae IP e URL nascosti (IoC) leggendo i byte grezzi."""
        ips = set()
        urls = set()
        
        ip_pattern = re.compile(rb'\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b')
        url_pattern = re.compile(rb'https?://[^\s/$.?#].[^\s]*')
        
        try:
            with open(self.file_path, "rb") as f:
                data = f.read() 
                ips.update([ip.decode('ascii') for ip in ip_pattern.findall(data)])
                urls.update([url.decode('ascii', errors='ignore') for url in url_pattern.findall(data)])
                
            return {"extracted_ips": list(ips), "extracted_urls": list(urls)}
        except Exception as e:
            return {"error": str(e)}

    def generate_report(self):
        """Genera il rapporto tattico finale."""
        dna_hash = self.analyze_dna()
        vt_results = self.query_the_index(dna_hash)
        tactical_data = self.extract_tactical_data()
        
        return {
            "target": self.file_name,
            "dna_signature": dna_hash,
            "global_threat_intel": vt_results,
            "tactical_data": tactical_data
        }
