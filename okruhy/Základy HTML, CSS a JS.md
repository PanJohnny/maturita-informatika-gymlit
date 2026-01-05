# Základy HTML, CSS a JS

## Osnova

* Struktura webové stránky  
* Základní HTML tagy  
* Základní CSS parametry  
* Základy JavaScriptu

## Struktura webové stránky

```html
<!doctype html>  
<html lang="cs">  
<head>  
   <meta charset="UTF-8">  
   <meta name="viewport"  
         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  
   <meta http-equiv="X-UA-Compatible" content="ie=edge">  
   <title>Nadpis stránky</title>  
</head>  
<body>  
<strong>Ahoj!</strong>  
</body>  
</html>
```

* <\!doctype html\> našeptává programu jakého formátu je tento XML soubor  
  * HTML je postaveno na XML  
* stránka je obklopena *html* elementem  
* *head* obsahuje elementy s metadaty (meta, …), *title* – název stránky (to co prohlížeč zobrazuje v liště záložek) a také odkazy na styly, či skripty

```html
<link rel="stylesheet" href="style.css">
```

* v *body* (těle stránky) je html, které bude vykresleno  
* tato ukázka by se vykreslila jako:

<pre>
——————————————————————
| Nadpis stránky   x |  
————————————————————————————————

<strong>Ahoj!</strong>

————————————————okno prohlížeče
</pre>
## Základní HTML elementy

* html bylo derivováno z XML  
* dokument má stromovou strukturu  
  * element může mít děti  
    * tím se to větví  
  * příklad:  
    * `<div><h1>Nadpis</h1><p>Paragraf</p></div>`
    * pak struktura vypadá takto: div \> h1, p  
* základní strukturu stránky tvoří [elementy](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)  
  * tagy  
    * začátek elementu: \<tagname\>  
    * konec elementu: \</tagname\>  
  * některé elementy jsou samouzavíratelné, např. \<input\>  
    * nepotřebují žádné HTML, či žádný text uvnitř nich  
  * můžeme definovat vlastnosti – atributy (pro různé elementy jsou také různé validní atributy, např. pro input element máme type, kde definujeme třeba to, jestli chceme tlačítko, textový vstup, číselný vstup, …)  
* nadpisy  
  * [h1 až h6](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) (heading)  
  * číslo pro úroveň (začínaje 1\) nadpisu, kdy 1 je největší  
  * Nadpis 1: h1  
  * Nadpis 2: h2  
* paragrafy  
  * [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) (paragraph)  
  * `<p>Toto je paragraf textu</p>`  
* hypertextové odkazy  
  * [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) (anchor)  
  * povinný atribut href udává kam odkaz vede  
  * nepovinný atribut target definuje, kde se odkaz otevře  
    * bez uvedení je standard aktuální panel prohlížeče  
    * `_blank` – nový panel  
* obrázek  
  * [img](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) (image)  
  * povinný atribut src udává url obrázku  
  * povinný atribut alt udává alternativní text, který přečte čtečka obrazovky  
  * pokud chceme definovat výšku a šířku můžeme tak udělat pomocí CSS, či pomocí nepovinných atributů width a height (v pixelech)  
  * `<img src="/logo.png“ alt="logo" width="100" height="100">`
* hlavní části dokumentu  
  * [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header)  
    * záhlaví  
    * mělo by obsahovat věci jako název stránky a odkazy pro navigaci  
  * [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main)  
    * hlavní část dokumentu  
    * zde by mělo být to s čím uživatel bude hlavně interagovat a číst  
  * [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer)  
    * zápatí  
    * důležité odkazy třeba jako smluvní podmínky  
    * v ČR nepovinné: copyright  
    * informace o autorovi  
* další členění  
  * [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section)  
    * generická část dokumentu  
    * mělo by obsahovat nadpis  
    * použití vhodné v případě toho, že naše stránka je nějakým článkem – odborný / publicistický styl  
  * [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article)  
    * článek, příspěvek na fóru  
    * má označovat obsah, který je k distribuci  
  * [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/aside)  
    * nějaké věci mimo hlavní obsah  
  * [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div)  
    * členění obsahu  
    * hojně využíváno  
  * [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span)  
    * inline členění obsahu  
* důležité atributy:  
  * class – pro CSS stylování  
  * id – unikátní id elementu, vhodné pro interakci s JavaScriptem. Zároveň prohlížeč naviguje podle hashpart k danému id (/o-nas\#mapa sescrolluje k elementu s id mapa)  
  * value – hodnota u input elementů  
  * name – název elementu, který se využívá při posílání formulářů

## Základní CSS parametry

* CSS slouží ke stylování elementů  
* většinou elementy dědí styly od svých rodičů  
* syntax:

```css
selektor {  
    atribut: hodnota;  
    atribut: hodnota;  
}
```

* pomocí selektoru označíme na co se bude styl aplikovat  
  * můžeme kombinovat, např. button.blue – \<button class="blue"\>  
  * syntax:  
    * `tagname` – název elementu  
    * `.class` elementu  
    * `#id` – id elementu  
  * další selektory – začínají :  
    * `:root` – kořen, vrchol dědičnosti  
    * `:nth-child( číslo )` – kolikáté dítě. např. :nth-child(1), :nth-child(even)  
    * `:after` – styl, který se aplikuje až po normálním stylu  
    * `:before` – styl, který se aplikuje před normálním stylem  
    * …  
  * media queries:  
    * upravení stylů podle parametrů média, na kterém se stránka zobrazuje (počítač, tištěný papír, telefon)  
    * `@media ...` 
    * můžeme dodat typ a třeba další parametry  
    * `@media print` – tisk, @media screen  
    * `@media screen and (max-width: 400px)` – nastavení pro menší obrazovky

```css
/* šedá barva pozadí pro obrazovky užší než 400px */
@media screen and (max-width: 400px) {  
    body {  
        background-color: lightgrey;  
    }  
}
```

* vybrané atributy:  
  * color: hex/rgb/název – barva textu   
    * `color: red;`
    * `color: rgb(255, 0, 0);`
    * `color: \#FF0000;`
  * background-color  
  * font-size: číslojednotka  
    * `font-size: 12pt;`
    * `font-size: 2em;`
    * `font-size: 10px;`
  * border, …

## Základy JS

* JavaScript (JS) je **skriptovací programovací jazyk**, který umožňuje interaktivitu na webových stránkách.  
* Běží hlavně na straně klienta (v prohlížeči), ale existuje i serverová varianta (např. Node.js).  
* Propojuje HTML (strukturu) a CSS (styl) a přidává dynamické chování.

### Syntaxe

* **Proměnné:**  
  * Deklarace pomocí `let` (měnitelná hodnota) nebo `const` (konstanta, neměnná hodnota).  
  * Příklad: `const jmeno = "Jan";` nebo `let vek = 30;`  
  * (Starší `var` se nedoporučuje kvůli rozsahu platnosti).  
* **Datové typy:** Základní typy zahrnují `string` (text), `number` (čísla), `boolean` (pravda/nepravda), `null`, `undefined`. Složité typy jsou `object` (objekty, pole) a `function`.  
* **Příkazy a středníky:** Každý příkaz je obvykle ukončen středníkem `;`, ačkoli v moderním JS to není vždy striktně nutné (tzv. Automatic Semicolon Insertion). Je to však doporučený zvyk.  
  * Příklad: `console.log("Ahoj světe");`  
* **Komentáře:** Jednořádkové komentáře začínají `//` a víceřádkové jsou obsaženy mezi `/*` a `*/`.  
* **Funkce:** Blok kódu, který lze opakovaně volat.

Příklad:  
function pozdrav(jmeno) {  
    return "Ahoj, " \+ jmeno \+ "\!";  
}

* pozdrav("Jan"); // Volání funkce  
* **Podmínky a cykly:**  
  * Podmínky: `if`, `else if`, `else`.  
  * Cykly: `for`, `while`.

### DOM Queries (Dotazování na dokument)

* **DOM (Document Object Model)** je programové rozhraní pro webové dokumenty. Reprezentuje stránku jako stromovou strukturu, kde je každý element uzel.  
* JS používá DOM pro přístup k HTML elementům a pro jejich manipulaci (změna obsahu, stylu, přidání/odebrání elementu).  
* Základní metody pro nalezení elementů:  
  * `document.getElementById("id_elementu")` – Vyhledá element podle jeho unikátního atributu `id`.  
  * `document.querySelector(".trida_elementu")` – Vyhledá **první** element, který odpovídá CSS selektoru (např. `.trida`, `#id`, `div.trida`).  
  * `document.querySelectorAll("p")` – Vyhledá **všechny** elementy, které odpovídají CSS selektoru, a vrátí je jako seznam (`NodeList`).

### Události (Events)

* Události jsou akce, které se stanou v prohlížeči (např. kliknutí myší, stisknutí klávesy, načtení stránky).  
* JavaScript umožňuje na tyto události reagovat spuštěním specifického kódu (tzv. **obsluhy událostí** \- event handler).  
* **Registrace obsluhy události:**  
  * Nejčastější způsob je pomocí metody `addEventListener()`.  
  * Syntaxe: `element.addEventListener('typ_udalosti', funkce_obsluhy);`

### **Příklad \- Stisknutí tlačítka:**

const tlacitko \= document.querySelector('\#mojeTlacitko');

// 2\. Připoj k němu obsluhu pro událost 'click'  
tlacitko.addEventListener('click', function() {  
    // Kód, který se spustí po kliknutí  
    alert('Tlačítko bylo stisknuto\!');  
});

* **Běžné typy událostí:**  
  * `click`: Kliknutí myši.  
  * `mouseover`, `mouseout`: Ukázání a odjetí myši.  
  * `keydown`, `keyup`: Stisknutí a uvolnění klávesy.  
  * `submit`: Odeslání formuláře.  
  * `load`: Načtení celého dokumentu.

## Zdroje

* CSS Tutorial. In: \[cit. 05.01.2026\]. Dostupné z: [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)  
* HTML Elements. In: \[cit. 05.01.2026\]. Dostupné z: [https://www.w3schools.com/html/html\_elements.asp](https://www.w3schools.com/html/html_elements.asp)  
* HTML elements reference \- HTML | MDN. In: *MDN Web Docs* \[online\]. 9\. 11\. 2025 \[cit. 05.01.2026\]. Dostupné z: [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)  
* HTML5. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=HTML5\&oldid=25256119](https://cs.wikipedia.org/w/index.php?title=HTML5&oldid=25256119)  
* JavaScript Tutorial. In: \[cit. 05.01.2026\]. Dostupné z: [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)  
* Representational State Transfer. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Representational\_State\_Transfer\&oldid=25220688](https://cs.wikipedia.org/w/index.php?title=Representational_State_Transfer&oldid=25220688)  
* Web Applications. In: *Web Applications* \[online\] \[cit. 31.12.2025\]. Dostupné z: [https://spring.io/web-applications](https://spring.io/web-applications)  
* Webová aplikace. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Webov%C3%A1\_aplikace\&oldid=25474761](https://cs.wikipedia.org/w/index.php?title=Webov%C3%A1_aplikace&oldid=25474761)