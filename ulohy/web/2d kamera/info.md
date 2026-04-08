# Implementace jednoduché 2D kamery
- musí umožňovat pohyb
- [html](#html)
- [css](#css)
- [javascript](#javascript)

1. Ve vaší webové stránce vytvořte „oblast“, kterou budeme dále označovat jako
   viewport – oblast reprezentující zorné pole kamery. Dále vytvořte oblast jako
   child viewportu, kterou označíme jako scene – oblast reprezentující prostor, ve
   kterém bude možné vykreslovat různé objekty jako HTML elementy.
2. Do oblasti scene umístěte minimálně dva různé objekty tak, aby jeden byl vidět,
   protože se nachází v oblasti určené viewportem a ten druhý nebyl vidět, protože
   se nachází mimo oblast určenou viewportem.
3. Vytvořte třídu Camera, která umožní uživateli pohybovat s oblastí scene pomocí
   myši takzvaným „dragováním“ – pokud uživatel přesune ukazatel myši na oblast
   scene a bude mít stisknuté dané tlačítko (například levé), pak se celá oblast scene
   začne posouvat společně s ukazatelem myši.
4. Vytvořte třídu MovableObject, pomocí které bude možné efektivně přidávat
   různé objekty do oblasti scene.
5. Modifikujte třídu MovableObject tak, aby uživateli umožnila měnit polohu
   vykresleného objektu v oblasti scene dragováním (viz pracovní úkol 3, ale pozor,
   implementace pro MovableObject se může lišit od implementace této funkce
   v třídě Camera).
6. Přidejte do vaší webové stránky tlačítko, po jehož stisknutí vznikne nový objekt třídy
   MovableObject, který se bude pohybovat společně s ukazatelem myši, dokud
   uživatel nestiskne dané tlačítko myši (opět například levé) v oblasti scene.

<iframe src="./" width="100%" height="400px">
    <a href="./">Zobrazit demonstraci</a>
</iframe>

## HTML
```html
<!doctype html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>2D kamera</title>

    <link rel="stylesheet" href="style.css">
    <!-- Defer zajistí, že se skript načte až po načtení HTML -->
    <script src="kamera.js" defer></script>
</head>
<body>
<div id="viewport">
    <div id="scene">
        <img src="https://http.cat/404" alt="Mimo" style="pointer-events: none; top: -800px; position: absolute">
        <img src="https://http.cat/200" alt="Pohybující zábava" id="movable" style="pointer-events: none;">
        <button type="button" id="add-object" style="position: absolute; top: 100px; right: 150px;">Přidat objekt</button>
    </div>
</div>
</body>
</html>
```

## CSS
```css
/* Musíme definovat styly tak, aby to fungovalo. Dejme tomu, že chceme aby scéna zaujímala 100% šířky a výšky okna */
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* overflow musí být hidden, aby se zabránilo posuvníkům */
    overflow: hidden;
    display: flex;
}

#scene {
    position: relative;
}

#viewport {
    width: 100%;
    height: 100vh; /* vh = viewport height, tedy výška okna prohlíčeče */
    /* Pozice relativní, aby se daly absolutně pozicovat prvky uvnitř */
    position: relative;
    background-color: #f0f0f0; /* Světle šedé pozadí pro lepší viditelnost */
}
```

## JavaScript
```javascript
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
```