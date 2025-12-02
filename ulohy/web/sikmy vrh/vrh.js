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