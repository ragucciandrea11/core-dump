# Usa un'immagine Python ufficiale e leggera
FROM python:3.12-slim

# Imposta la directory di lavoro dentro il container
WORKDIR /app

# Copia solo il file dei requisiti prima (per ottimizzare la cache di Docker)
COPY backend/requirements.txt .

# Installa l'equipaggiamento
RUN pip install --no-cache-dir -r requirements.txt

# Copia tutto il resto del codice (tranne ciò che è nel .dockerignore/.gitignore)
COPY . .

# Esponi la porta del server
EXPOSE 8000

# Il comando per accendere il server S.H.I.E.L.D.
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
