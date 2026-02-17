# Simulace šikmého vrhu
- šikmý vrh
- poznámka: časově náročné, jedná se o cvičnou úlohu
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
<main>
    <div id="controls">
        <h2>Ovládací panel</h2>
    </div>
    <div id="scene">
        <!-- Objekt co poletí -->
        <div id="object"></div>
    </div>
</main>
</body>
</html>
```

## CSS
```css
body {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
}

#scene {
    width: 100%;
    /* Pozice relativní, aby se daly absolutně pozicovat prvky uvnitř */
    position: relative;
    background-color: #e0f7fa; /* Světle modré pozadí pro lepší viditelnost */
}

#object {
    width: 10px;
    height: 10px;
    background-color: orange; /* Oranžová barva pro objekt */
    position: absolute;
}

#controls {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
}

label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

header {
    margin: 20px 20px 0 20px;
}

h1 {
    font-size: 25px;
    margin: 0;
}

main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    flex: 1;
    margin: 20px;
}

button {
    margin-top: 20px;
}
```

## JavaScript
```javascript
let settings = {
    x0: 0,
    y0: 0,
    vx0: 0,
    vy0: 0,
    g: 0
}

class Controls {
    constructor() {
        this.parent = document.getElementById("controls");

        this.createNumberInput("x0", "Počáteční x", 0);
        this.createNumberInput("y0", "Počáteční y", 300);
        this.createNumberInput("vx0", "Rychlost x", 100);
        this.createNumberInput("vy0", "Rychlost y", 20);
        this.createNumberInput("g", "Gravitační zrychlení", 9.81);

        this.startButton = document.createElement("button");
        this.startButton.innerText = "Start";

        this.parent.appendChild(this.startButton);
    }

    createNumberInput(id, labelText, defaultValue) {
        const input = document.createElement("input");
        input.id = id;
        input.min = "0";
        input.defaultValue = defaultValue;
        input.value = defaultValue;
        input.type = "number";

        settings[id] = defaultValue;
        input.addEventListener("change", () => {
            settings[id] = parseFloat(input.value);
        })

        const label = document.createElement("label");
        label.innerText = labelText;
        label.appendChild(input);

        this.parent.appendChild(label);
    }

    setOnButtonClick(eventConsumer) {
        this.startButton.addEventListener("click", eventConsumer);
    }
}

class FallingObject {
    constructor() {
        this.animating = false;
        this.object = document.getElementById("object");
        this.dt = 0;
        this.deltaTime = 0.1;
    }

    calculatePosition() {
        this.vx1 = settings.vx0;
        this.vy1 = settings.vy0 + settings.g * this.dt;
        this.x = settings.x0 + this.vx1 * this.dt;
        this.y = settings.y0 - this.vy1 * this.dt;
    }

    // Animace
    animate(self) {
        if (!self.animating) {
            return;
        }
        self.calculatePosition();

        self.object.style.left = this.x + "px";
        self.object.style.bottom = this.y + "px";

        // Zvýšíme čas
        self.dt += this.deltaTime;

        // Pokračujeme v animaci, pokud objekt ještě není na zemi
        if (self.y >= 0) {
            // Správně bychom měli volat tohle, ale reálně se nic pro demo nestane, když prostě napíšeme animate() znovu
            requestAnimationFrame(() => {
                self.animate(self);
            });

        } else {
            // Restart animace
            self.dt = 0;
            requestAnimationFrame(() => {
                self.animate(self);
            });
        }
    }

    reset() {
        this.dt = 0;
        this.animating = true;
        this.animate(this);
    }

    stop() {
        this.animating = false;
        this.animate(this);
    }
}

const controls = new Controls();
const fallingObject = new FallingObject();

controls.setOnButtonClick((e) => {
    if (!fallingObject.animating) {
        fallingObject.reset();
        e.target.innerText = "Stop";
    } else {
        fallingObject.stop();
        e.target.innerText = "Reset";
    }
});
```