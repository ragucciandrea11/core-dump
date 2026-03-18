// --- 1. OPZIONI "PRO" DI CODEMIRROR ---
// Qui attiviamo l'autocompletamento magico e i rilevatori di errori
const cmOptions = { 
    theme: "monokai",         // Tema di partenza
    lineNumbers: true,        // Numeri di riga
    autoCloseBrackets: true,  // Chiude in automatico { [ (
    autoCloseTags: true,      // Chiude in automatico <div> ecc.
    matchBrackets: true,      // Evidenzia le parentesi accoppiate
    lint: true                // ATTIVA IL RILEVATORE DI ERRORI! (Pallini rossi)
};

// Inizializziamo gli Editor
const singleEditor = CodeMirror.fromTextArea(document.getElementById("single-editor"), { mode: "htmlmixed", ...cmOptions });
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-editor"), { mode: "htmlmixed", ...cmOptions });
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css-editor"), { mode: "css", ...cmOptions });

// Per il JS, diciamo al linter di usare la versione moderna (ES6) per evitare falsi errori con 'let' e 'const'
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js-editor"), { 
    mode: "javascript", 
    ...cmOptions,
    lint: { esversion: 6 } 
});

let modalitaAttuale = 'split'; 
const preview = document.getElementById("live-preview");

// --- 2. FUNZIONE PER L'ANTEPRIMA LIVE ---
function updatePreview() {
    let codiceFinale = "";
    if (modalitaAttuale === 'split') {
        const html = htmlEditor.getValue();
        const css = cssEditor.getValue();
        const js = jsEditor.getValue();
        codiceFinale = `
            <!DOCTYPE html><html><head>
            <style>${css}</style>
            </head><body>${html}
            <script>${js}<\/script>
            </body></html>`;
    } else {
        codiceFinale = singleEditor.getValue();
    }
    preview.srcdoc = codiceFinale;
}

// Aggiorna l'anteprima in tempo reale
singleEditor.on('change', updatePreview);
htmlEditor.on('change', updatePreview);
cssEditor.on('change', updatePreview);
jsEditor.on('change', updatePreview);


// --- 3. PANNELLI A FISARMONICA ---
window.togglePanel = function(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle('collapsed');
    
    // Diciamo agli editor di ridisegnarsi dopo l'animazione, per evitare bug visivi
    setTimeout(() => {
        htmlEditor.refresh();
        cssEditor.refresh();
        jsEditor.refresh();
    }, 450); 
};


// --- 4. GESTIONE TEMI (UI e EDITOR) ---
window.cambiaTemaEditor = function() {
    // Prende il valore dal menù a tendina
    const selector = document.getElementById('theme-selector');
    const nuovoTema = selector.value;
    
    // Lo applica a tutti gli editor
    singleEditor.setOption("theme", nuovoTema);
    htmlEditor.setOption("theme", nuovoTema);
    cssEditor.setOption("theme", nuovoTema);
    jsEditor.setOption("theme", nuovoTema);
};

window.cambiaTemaUI = function() {
    const body = document.body;
    const btnTema = document.getElementById('theme-toggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btnTema.textContent = '🌙 Dark UI';
    } else {
        body.setAttribute('data-theme', 'dark');
        btnTema.textContent = '☀️ Light UI';
    }
};


// --- 5. CERVELLO PER DIVIDERE HTML/CSS/JS ---
function analizzaEPartiziona(codice) {
    const styles = codice.match(/<style[^>]*>/gi);
    const scripts = codice.match(/<script[^>]*>/gi);

    if ((styles && styles.length > 1) || (scripts && scripts.length > 1) || codice.includes('src=')) {
        return { success: false };
    }

    let css = "";
    let js = "";
    let html = codice;

    const cssMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    if (cssMatch) {
        css = cssMatch[1].trim();
        html = html.replace(cssMatch[0], ''); 
    }

    const jsMatch = html.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    if (jsMatch) {
        js = jsMatch[1].trim();
        html = html.replace(jsMatch[0], ''); 
    }

    return { success: true, html: html.trim(), css, js };
}

function applicaCodice(codiceBruto) {
    const risultato = analizzaEPartiziona(codiceBruto);
    const opzioniBeautify = { indent_size: 2, space_in_empty_paren: true };

    if (risultato.success) {
        modalitaAttuale = 'split';
        document.getElementById('single-view').style.display = 'none';
        document.getElementById('split-view').style.display = 'flex';
        
        htmlEditor.setValue(html_beautify(risultato.html, opzioniBeautify));
        cssEditor.setValue(css_beautify(risultato.css, opzioniBeautify));
        jsEditor.setValue(js_beautify(risultato.js, opzioniBeautify));
        
        setTimeout(() => { htmlEditor.refresh(); cssEditor.refresh(); jsEditor.refresh(); }, 10);
    } else {
        modalitaAttuale = 'single';
        document.getElementById('split-view').style.display = 'none';
        document.getElementById('single-view').style.display = 'flex';
        
        singleEditor.setValue(html_beautify(codiceBruto, opzioniBeautify));
        setTimeout(() => { singleEditor.refresh(); }, 10);
    }
}


// --- 6. BARRA TRASCINABILE (RESIZER) INTELLIGENTE ---
const resizer = document.getElementById('drag-bar');
const leftPanel = document.getElementById('left-panel');
let isResizing = false;

resizer.addEventListener('mousedown', () => {
    isResizing = true;
    document.body.classList.add('is-resizing'); 
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    
    // Controlla se siamo su PC (affiancati) o Cellulare (impilati)
    if (window.innerWidth > 768) {
        let newWidth = e.clientX;
        if (newWidth < 200) newWidth = 200;
        if (newWidth > window.innerWidth - 200) newWidth = window.innerWidth - 200;
        leftPanel.style.width = newWidth + 'px';
        leftPanel.style.height = ''; // Resetta l'altezza per sicurezza
    } else {
        // Logica per Smartphone (Su/Giù)
        let navHeight = document.querySelector('.navbar').offsetHeight;
        let newHeight = e.clientY - navHeight;
        if (newHeight < 150) newHeight = 150;
        if (newHeight > window.innerHeight - navHeight - 150) newHeight = window.innerHeight - navHeight - 150;
        leftPanel.style.height = newHeight + 'px';
        leftPanel.style.width = '100%';
    }
});

document.addEventListener('mouseup', () => {
    if (isResizing) {
        isResizing = false;
        document.body.classList.remove('is-resizing');
    }
});


// --- 7. CARICARE E SCARICARE FILE ---
window.scaricaFile = function() {
    let testo = "";
    if(modalitaAttuale === 'split') {
        testo = `<!DOCTYPE html>\n<html>\n<head>\n<style>\n${cssEditor.getValue()}\n</style>\n</head>\n<body>\n${htmlEditor.getValue()}\n<script>\n${jsEditor.getValue()}\n<\/script>\n</body>\n</html>`;
        testo = html_beautify(testo, { indent_size: 2 });
    } else {
        testo = singleEditor.getValue();
    }
    const blob = new Blob([testo], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'il-mio-progetto.html';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
};

window.leggiFile = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        applicaCodice(e.target.result);
        document.querySelectorAll('.btn-menu').forEach(b => b.classList.remove('attivo'));
    };
    reader.readAsText(file);
    event.target.value = ''; 
};

window.caricaTutorial = async function(nomeFile, bottoneCliccato) {
    document.querySelectorAll('.btn-menu').forEach(b => b.classList.remove('attivo'));
    bottoneCliccato.classList.add('attivo');

    try {
        const risposta = await fetch(nomeFile);
        if (!risposta.ok) throw new Error("File non trovato.");
        applicaCodice(await risposta.text());
    } catch (errore) {
        applicaCodice("\n" + errore);
    }
};

// Avvio
document.querySelector('.btn-menu').click();