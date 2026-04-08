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

let objects = [];

class MovableObject {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.element = element;
        this.element.style.position = "absolute"; // Abychom mohli posouvat element pomocí left a top
        objects.push(this);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    }

    getClientRect() {
        return this.element.getBoundingClientRect();
    }
}

new MovableObject(0,0, document.getElementById("movable"));

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
        // check if it is in a movable object
        let inObject = false;
        for (let obj of objects) {
            // getClientRect nám vrátí objekt s vlastnostmi left, top, right, bottom, které nám říkají pozici a velikost elementu na obrazovce
            let rect = obj.getClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                inObject = true;
                obj.move(e.movementX, e.movementY);
                break;
            }
        }
        if (!inObject)
            camera.move(e.movementX, e.movementY);
    }
});

// Teď to zoomování kolečkem myši
document.addEventListener("wheel", (e) => {
    // e.deltaY říká, jak moc kolečko otočilo. Kladné hodnoty znamenají rolování dolů, záporné nahoru.
    // My chceme, aby rolování nahoru přibližovalo (zvětšovalo zoom), takže použijeme -e.deltaY
    camera.zoomBy(-e.deltaY * 0.001); // Násobíme malým číslem, aby to nebylo moc rychlé
});

document.querySelector("#add-object").addEventListener("click", (e) => {
    const newElement = document.createElement("img");
    let pointerX = e.clientX;
    let pointerY = e.clientY;
    newElement.style.left = pointerX + "px";
    newElement.style.top = pointerY + "px";
    newElement.src = "https://http.cat/301";
    newElement.style.pointerEvents = "none";
    scene.appendChild(newElement);
    new MovableObject(pointerX, pointerY, newElement);
    isDragging = true;
})