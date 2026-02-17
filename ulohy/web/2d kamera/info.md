# Implementace jednoduché 2D kamery
- musí umožňovat pohyb
- [html](#html)
- [css](#css)
- [javascript](#javascript)

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
<div id="scene">
    <!-- Nějaký objekty ve scéně -->
    <h1>2D kamera</h1>
    <p>Tento příklad demonstruje implementaci 2D kamery</p>
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
```