import requests
from bs4 import BeautifulSoup
import csv
import time # Nuova libreria per gestire le pause

# 1. Definiamo l'URL base. Le parentesi graffe {} ci serviranno per inserire il numero della pagina
url_base = "http://books.toscrape.com/catalogue/page-{}.html"

print("🚀 Avvio lo scraper multi-pagina...\n")

# 2. Apriamo il file CSV una sola volta all'inizio
with open('catalogo_completo.csv', mode='w', newline='', encoding='utf-8-sig') as file_csv:
    writer = csv.writer(file_csv)
    writer.writerow(['Titolo', 'Prezzo', 'Disponibilità'])
    
    # 3. Creiamo un ciclo che va da 1 a 50 (il 51 è escluso in Python)
    for pagina in range(1, 51):
        print(f"Sto estraendo i dati dalla pagina {pagina}...")
        
        # Inseriamo il numero della pagina attuale nell'URL
        url = url_base.format(pagina)
        
        risposta = requests.get(url)
        risposta.encoding = 'utf-8'
        
        if risposta.status_code == 200:
            soup = BeautifulSoup(risposta.text, 'html.parser')
            libri = soup.find_all('article', class_='product_pod')
            
            for libro in libri:
                titolo = libro.h3.a['title']
                prezzo = libro.find('p', class_='price_color').text
                disponibilita = libro.find('p', class_='instock availability').text.strip()
                
                writer.writerow([titolo, prezzo, disponibilita])
            
            # 4. Inseriamo una pausa di 1 secondo prima di passare alla pagina successiva
            time.sleep(1)
            
        else:
            print(f"⚠️ Ops! Errore alla pagina {pagina} (Codice: {risposta.status_code})")

print("\n✅ Fatto! Ho salvato tutti i dati nel file 'catalogo_completo.csv'.")