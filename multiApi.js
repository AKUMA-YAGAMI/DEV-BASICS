// Notas en orden del círculo de quintas
const notas = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'];

// Acordes diatónicos para cada tonalidad (Mayor)
const scalesMajor = {
    'C': { I: 'C', IV: 'F', V: 'G' },
    'G': { I: 'G', IV: 'C', V: 'D' },
    'D': { I: 'D', IV: 'G', V: 'A' },
    'A': { I: 'A', IV: 'D', V: 'E' },
    'E': { I: 'E', IV: 'A', V: 'B' },
    'B': { I: 'B', IV: 'E', V: 'F#' },
    'F#': { I: 'F#', IV: 'B', V: 'C#' },
    'C#': { I: 'C#', IV: 'F#', V: 'G#' },
    'G#': { I: 'G#', IV: 'C#', V: 'D#' },
    'D#': { I: 'D#', IV: 'G#', V: 'A#' },
    'A#': { I: 'A#', IV: 'D#', V: 'F' },
    'F': { I: 'F', IV: 'Bb', V: 'C' }
};

// Acordes diatónicos para cada tonalidad (Menor Natural)
// Las escalas menores naturales usan los sostenidos/bemoles de su relativa mayor
const scalesMinor = {
    'A': { i: 'Am', iv: 'Dm', v: 'Em' },        // A menor = C mayor (sin sostenidos/bemoles)
    'E': { i: 'Em', iv: 'Am', v: 'Bm' },        // E menor = G mayor (1 sostenido)
    'B': { i: 'Bm', iv: 'Em', v: 'F#m' },       // B menor = D mayor (2 sostenidos)
    'F#': { i: 'F#m', iv: 'Bm', v: 'C#m' },     // F# menor = A mayor (3 sostenidos)
    'C#': { i: 'C#m', iv: 'F#m', v: 'G#m' },    // C# menor = E mayor (4 sostenidos)
    'G#': { i: 'G#m', iv: 'C#m', v: 'D#m' },    // G# menor = B mayor (5 sostenidos)
    'D#': { i: 'D#m', iv: 'G#m', v: 'A#m' },    // D# menor = F# mayor (6 sostenidos)
    'A#': { i: 'A#m', iv: 'D#m', v: 'E#m' },    // A# menor = C# mayor (7 sostenidos)
    'D': { i: 'Dm', iv: 'Gm', v: 'Am' },        // D menor = F mayor (1 bemol)
    'G': { i: 'Gm', iv: 'Cm', v: 'Dm' },        // G menor = Bb mayor (2 bemoles)
    'C': { i: 'Cm', iv: 'Fm', v: 'Gm' },        // C menor = Eb mayor (3 bemoles)
    'F': { i: 'Fm', iv: 'Bbm', v: 'Cm' }        // F menor = Ab mayor (4 bemoles)
};

// Todos los acordes de la escala menor natural
const allChordsMinor = {
    'A': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],        // Sin sostenidos ni bemoles
    'E': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],        // 1 sostenido (F#)
    'B': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'],       // 2 sostenidos (F#, C#)
    'F#': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],     // 3 sostenidos (F#, C#, G#)
    'C#': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],    // 4 sostenidos (F#, C#, G#, D#)
    'G#': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],   // 5 sostenidos
    'D#': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],  // 6 sostenidos
    'A#': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'], // 7 sostenidos
    'D': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],        // 1 bemol (Bb)
    'G': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],       // 2 bemoles (Bb, Eb)
    'C': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],      // 3 bemoles (Bb, Eb, Ab)
    'F': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb']      // 4 bemoles (Bb, Eb, Ab, Db)
};

let currentNote = null;
let currentMode = 'major';

// Calcular posición en el círculo
function getCirclePosition(index) {
    const angle = (index / 12) * 360 - 90;
    const radius = 140;
    const x = Math.cos((angle * Math.PI) / 180) * radius + 200;
    const y = Math.sin((angle * Math.PI) / 180) * radius + 200;
    return { x, y };
}

// Inicializar notes en el círculo
function initializeCircle() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';

    notas.forEach((nota, index) => {
        const { x, y } = getCirclePosition(index);
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = nota;
        noteElement.style.left = (x - 30) + 'px';
        noteElement.style.top = (y - 30) + 'px';
        noteElement.onclick = () => selectNote(nota);
        container.appendChild(noteElement);
    });
}

// Seleccionar una nota
function selectNote(nota) {
    currentNote = nota;
    
    // Actualizar visual
    document.querySelectorAll('.note').forEach(el => {
        el.classList.remove('active');
        if (el.textContent === nota) {
            el.classList.add('active');
        }
    });

    // Mostrar información
    document.getElementById('selectedNote').textContent = `📍 Tonalidad: ${nota} ${currentMode === 'major' ? 'Mayor' : 'Menor'}`;
    displayChords();
}

// Mostrar acordes
function displayChords() {
    if (!currentNote) return;

    const chordsDisplay = document.getElementById('chordsDisplay');
    const allChords = currentMode === 'major' ? allChordsMajor[currentNote] : allChordsMinor[currentNote];
    const scaleChords = currentMode === 'major' ? scalesMajor[currentNote] : scalesMinor[currentNote];
    const scaleValues = Object.values(scaleChords);

    let html = '<h3 style="margin-bottom: 15px; font-size: 18px;">Acordes de la Escala:</h3>';
    
    allChords.forEach(chord => {
        const isInScale = scaleValues.includes(chord);
        const className = isInScale ? 'chord scale' : 'chord';
        const degree = isInScale ? Object.keys(scaleChords).find(k => scaleChords[k] === chord) : '';
        
        html += `
            <div class="${className}">
                <span class="chord-name">${chord}</span>
                ${degree ? `<span class="chord-degree">${degree}</span>` : ''}
            </div>
        `;
    });

    chordsDisplay.innerHTML = html;
}

// Cambiar modo
function setMode(mode) {
    currentMode = mode;
    
    // Actualizar botones
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Actualizar información si hay una nota seleccionada
    if (currentNote) {
        document.getElementById('selectedNote').textContent = `📍 Tonalidad: ${currentNote} ${currentMode === 'major' ? 'Mayor' : 'Menor'}`;
        displayChords();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initializeCircle();
});