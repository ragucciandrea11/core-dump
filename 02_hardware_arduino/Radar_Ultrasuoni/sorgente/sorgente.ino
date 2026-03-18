// --- DEFINIZIONE PIN ---
const int trigPin = 9;
const int echoPin = 10;
const int ledVerde = 2;
const int ledGiallo = 3;
const int ledRosso = 4;
const int buzzer = 5;

// Variabili per il calcolo
unsigned long durata;
int distanza;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledVerde, OUTPUT);
  pinMode(ledGiallo, OUTPUT);
  pinMode(ledRosso, OUTPUT);
  pinMode(buzzer, OUTPUT);
  
  Serial.begin(9600); // Terminale di debug
}

void loop() {
  // 1. Pulizia del pin Trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // 2. Spara l'impulso sonoro
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // 3. Leggi l'eco con TIMEOUT ANTI-LAG (max 15000 microsecondi)
  durata = pulseIn(echoPin, HIGH, 15000);
  
  // 4. Calcolo distanza e gestione del timeout
  if (durata == 0) {
    // Se durata è 0, significa che l'eco non è tornato in tempo (nessun ostacolo vicino)
    distanza = 100; // Impostiamo una distanza di sicurezza "fittizia"
  } else {
    // Calcolo reale della distanza in cm
    distanza = durata * 0.034 / 2;
  }
  
  Serial.print("Distanza: ");
  Serial.print(distanza);
  Serial.println(" cm");

  // 5. LOGICA DI ALLARME (Reattività istantanea)
  
  // Oltre i 30cm -> TUTTO SICURO
  if (distanza > 30) {
    spegniTutto();
    digitalWrite(ledVerde, HIGH);
    noTone(buzzer); 
  } 
  // Tra i 10cm e i 30cm -> ZONA DI AVVERTIMENTO
  else if (distanza <= 30 && distanza > 10) {
    spegniTutto();
    digitalWrite(ledGiallo, HIGH);
    noTone(buzzer); 
  } 
  // A 10cm o meno -> PERICOLO CRITICO (Allarme!)
  else if (distanza <= 10) {
    spegniTutto();
    digitalWrite(ledRosso, HIGH);
    tone(buzzer, 1000); // Suona l'allarme
  }
  
  // Pausa minima per non sovraccaricare la CPU (Sistema fluido)
  delay(30); 
}

// Funzione di utilità per pulire i LED
void spegniTutto() {
  digitalWrite(ledVerde, LOW);
  digitalWrite(ledGiallo, LOW);
  digitalWrite(ledRosso, LOW);
}