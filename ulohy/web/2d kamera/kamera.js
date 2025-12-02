// Element, který bude naše scéna. My budeme pak upravovat jeho pozici pro posouvání kamery.
const scene = document.getElementById("scene");

// Definujeme kameru jako třídu, protože to tak bylo na semináři
class Camera {
    constructor() {
        /*
        Souřadnice kamery. U tříd se musí využívat this. pro přístup k vlastnostem instance.

        Souřadný systém v html dokumentu začíná v levém horním rohu.
        Do prava osa x roste, dolů osa y roste.
        ---------- x+
        |
        |
        |
        |
        y+

        Na opačnou stranu pak mají hodnoty záporné znaménko.
         */
        this.x = 0;
        this.y = 0;

        this.zoom = 1; // výchozí přiblížení je 1 (100%)
    }

    // Pro definici metody ve tříde nepoužíváme klíčové slovo function
    move(dx, dy) {
        // Posuneme kameru o zadané hodnoty
        this.x += dx;
        this.y += dy;

        // Aktualizujeme pozici scény tak, aby odpovídala pozici kamery
        scene.style.left = this.x + "px"; // pro přidání jednotky můžeme string přidat pomocí operátoru +
        scene.style.top = this.y + "px";
    }

    // Změní přiblížení kamery. Nejspíš nebude v maturitě potřeba.
    zoomBy(factor) {
        // Tohle je nejlepší způsob, jak změnit velikost elementu v HTML
        // Nemusíme přidávat jednotky, představte si to jako násobení velikosti
        this.zoom += factor;
        scene.style.transform = `scale(${this.zoom})`;
    }
}

// Vytvoříme instanci kamery
const camera = new Camera();

/*
Levé tlačítko myši + pohyb = posun kamery.

isDragging znamená jestli je levé tlačítko myši stisknuté.
 */
let isDragging = false;

// Přidáme event listener pro stisknutí a pustění tlačítka myši
// Down = stisknutí, up = puštění
document.addEventListener("mousedown", (e) => {
    if (e.button === 0) { // 0 znamená levé tlačítko myši
        isDragging = true;
    }
});

document.addEventListener("mouseup", (e) => {
    if (e.button === 0) {
        isDragging = false;
    }
});

// Přidáme event listener pro pohyb myši
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        camera.move(e.movementX, e.movementY);
    }
});

// Teď to zoomování kolečkem myši
document.addEventListener("wheel", (e) => {
    // e.deltaY říká, jak moc kolečko otočilo. Kladné hodnoty znamenají rolování dolů, záporné nahoru.
    // My chceme, aby rolování nahoru přibližovalo (zvětšovalo zoom), takže použijeme -e.deltaY
    camera.zoomBy(-e.deltaY * 0.001); // Násobíme malým číslem, aby to nebylo moc rychlé
});