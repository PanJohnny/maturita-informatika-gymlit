# Vykreslení modifikovatelného trojúhelníku
- vrcholy za které můžeme hýbat
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
    <title>Modifikovatelný trojúhelník</title>

    <link rel="stylesheet" href="style.css">
    <!-- Defer zajistí, že se skript načte až po načtení HTML -->
    <script src="trojuhelnik.js" defer></script>
</head>
<body>
<!-- Header znamená hlavička stránky (info o stránce) -->
<header>
    <h1>Modifikovatelný trojúhelník</h1>
    <p>Tento příklad demonstruje implementaci trojúhelníku u kterýho můžeme tahat vrcholy</p>
</header>
<div id="scene">
    <!-- Tady použijeme canvas, protože je to tak jednodušší na kreslení. Nastavíme nějakou velikost (je to jednodušší)-->
    <canvas id="canvas" width="500px" height="400px"></canvas>
</div>
</body>
</html>
```

## CSS
```css
canvas {
    border: 1px solid black;
}
```

## JavaScript
```javascript
const canvas = document.getElementById("canvas");

// Získáme kontext pro kreslení do canvasu
const ctx = canvas.getContext("2d");

// Definujeme třídu pro bod (okraje trojúhelníku)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

// Definujeme třídu
class Triangle {
    constructor() {
        this.points = [ // Nějaký hodnoty...
            new Point(10, 10),
            new Point(110, 10),
            new Point(60, 100)
        ];
    }

    draw() {
        // Vykreslí cestu trojúhelníku (ty okraje)
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        ctx.lineTo(this.points[1].x, this.points[1].y);
        ctx.lineTo(this.points[2].x, this.points[2].y);
        ctx.closePath();

        // Vyplnění
        ctx.fillStyle = "blue";
        ctx.fill();

        // Ohraničení
        ctx.strokeStyle = "black";
        ctx.stroke();

        // Chceme vykreslit i třeba červeně body okrajů jako kružnice
        ctx.fillStyle = "red";
        for (const point of this.points) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); // Kružnice o poloměru 5
            ctx.fill();
        }
    }

    pointAt(x, y) {
        // Vrátí bod trojúhelníku, který je na souřadnicích (x, y), pokud tam nějaký je
        for (const point of this.points) {
            const dx = point.x - x;
            const dy = point.y - y;
            const distanceSquared = dx * dx + dy * dy;
            if (distanceSquared <= 25) { // 5^2 = 25 (prostě jestli je to v tom kolečku)
                return point;
            }
        }
        // Pokud tam žádný bod není, vrátíme null
        return null;
    }
}

// Vytvoříme instanci trojúhelníku
const triangle = new Triangle();

// Vykreslíme trojúhelník
triangle.draw();

// Přidáme event listener pro pohybování s myší (pro posun bodů trojúhelníku)
let selectedPoint = null;

canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    selectedPoint = triangle.pointAt(mouseX, mouseY);
});

// Pokud pustíme tak bod není vybraný
canvas.addEventListener("mouseup", (e) => {
    selectedPoint = null;
});

// Nebo pokud myší opustíme canvas
canvas.addEventListener("mouseleave", (e) => {
    selectedPoint = null;
});

// Když se myš pohybuje, posuneme vybraný bod
document.addEventListener("mousemove", (e) => {
    if (selectedPoint) {
        selectedPoint.move(e.movementX, e.movementY);
        // Vyčistíme canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // A znovu vykreslíme trojúhelník
        triangle.draw();
    }
});
```