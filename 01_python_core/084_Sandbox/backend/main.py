from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse, FileResponse
import shutil
import os
from backend.core.analyzer import ShieldAnalyzer

# Inizializziamo il server
app = FastAPI(
    title="S.H.I.E.L.D. Protocollo 0-8-4",
    description="API per l'analisi tattica dei malware",
    version="1.0.0"
)

# Creiamo una zona di quarantena sicura
QUARANTINE_DIR = "quarantine_zone"
os.makedirs(QUARANTINE_DIR, exist_ok=True)

@app.post("/api/scan")
async def scan_artifact(file: UploadFile = File(...)):
    """Riceve un file dal frontend, lo analizza e lo distrugge."""
    try:
        # 1. Salvataggio sicuro in quarantena
        safe_path = os.path.join(QUARANTINE_DIR, file.filename)
        with open(safe_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # 2. Avvio Motore
        scanner = ShieldAnalyzer(safe_path)
        report = scanner.generate_report()
        
        # 3. Protocollo di Autodistruzione (Pulizia)
        if os.path.exists(safe_path):
            os.remove(safe_path)
            
        return JSONResponse(content=report)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Errore critico: {str(e)}")

@app.get("/ui")
async def load_dashboard():
    """Carica l'interfaccia grafica S.H.I.E.L.D. (Coordinate Assolute)."""
    # Calcola la cartella radice del progetto per trovare l'HTML senza errori
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    html_path = os.path.join(base_dir, "frontend", "index.html")
    
    return FileResponse(html_path)
