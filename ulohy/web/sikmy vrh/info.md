# Simulace šikmého vrhu
- šikmý vrh
- poznámka: pokročilejší je i počítání s odporem vzduchu, možná bude požadováno
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
    <title>Šikmý vrh</title>

    <link rel="stylesheet" href="style.css">
    <!-- Defer zajistí, že se skript načte až po načtení HTML -->
    <script src="vrh.js" defer></script>
</head>
<body>
<header>
    <h1>Šikmý vrh</h1>
    <p>Simulace šikmého vrhu :)</p>
</header>
<div id="scene">
    <!-- Objekt co poletí -->
    <div id="object"></div>
</div>
</body>
</html>
```

## CSS
```css
#scene {
    width: 100%;
    height: 250px; /* nějaká pevná výška pro scénu */
    /* Pozice relativní, aby se daly absolutně pozicovat prvky uvnitř */
    position: relative;
    background-color: #e0f7fa;
}

#object {
    width: 10px;
    height: 10px;
    background-color: orange;
    position: absolute;
}
```

## JavaScript
```javascript
// Nějaký konstanty
const g = 9.81; // zrychlení způsobené gravitací (m/s²)
const alpha = Math.PI/4; // úhel hodu v radiánech
const v0 = 50; // počáteční rychlost hodu (m/s)

// https://cs.wikipedia.org/wiki/Vrh_%C5%A1ikm%C3%BD
// x = x_0 + v_0 * t * cos(alpha)
// y = y_0 + v_0 * t * sin(alpha) - (1/2) * g * t^2

// Počáteční pozice
const x0 = 0;
const y0 = 50; // výška 50 metrů

// Čas
let t = 0;
const deltaT = 0.1; // časový krok (s)

// Funkce pro výpočet pozice v čase t
function getPosition(t) {
    const x = x0 + v0 * t * Math.cos(alpha);
    const y = y0 + v0 * t * Math.sin(alpha) - 0.5 * g * t * t;
    return { x, y };
}

const object = document.getElementById("object");

// Animace
function animate() {
    const pos = getPosition(t);
    object.style.left = pos.x + "px";
    object.style.bottom = pos.y + "px";

    // Zvýšíme čas
    t += deltaT;

    // Pokračujeme v animaci, pokud objekt ještě není na zemi
    if (pos.y >= 0) {
        // Správně bychom měli volat tohle, ale reálně se nic pro demo nestane, když prostě napíšeme animate() znovu
        requestAnimationFrame(animate);
    } else {
        // Restart animace
        t = 0;
        animate();
    }
}

// Start animace
animate();
```