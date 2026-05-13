# Digitální reprezentace informací

## Osnova

* úvod  
* jednotky informace  
* binární soustava  
* reprezentace čísel  
* reprezentace textu  
* reprezentace obrazu  
* reprezentace zvuku  
* reprezentace videa  
* komprese dat  
* výhody a nevýhody digitální reprezentace

* Digitální reprezentace informací \= **převod informací** do podoby, kterou **dokáže zpracovat počítač**  
* Počítače pracují s čísly, konkrétně s **binární soustavou** (hodnoty 0 a 1\)  
* **Každá informace** – text, číslo, obrázek, zvuk nebo video – **uložena jako posloupnost bitů**  
* **JEDNOTKY INFORMACE**  
  * **Bit** (binary digit)  
    * **nejmenší jednotka informace**  
    * může nabývat **hodnoty 0 nebo 1**  
    * reprezentuje dva stavy (ano/ne, zapnuto/vypnuto)  
  * **Byte**  
    * **8 bitů**  
    * umožňuje zapsat **256 kombinací** (2⁸)  
    * používá se k **uložení jednoho znaku** (např. písmeno)  
  * **Vyšší jednotky**  
  * 1 kB \= 1024 B  
  * 1 MB \= 1024 kB  
  * 1 GB \= 1024 MB  
  * 1 TB \= 1024 GB  
* **BINÁRNÍ SOUSTAVA**  
  * Počítače používají dvojkovou soustavu → dva stabilní stavy:  
    * proud teče → 1  
    * proud neteče → 0  
  * **Každé číslo lze převést do binární podoby** pomocí mocnin dvou  
  * Například číslo 13: 13₁₀ \= 1101₂  
  * To znamená: 1×2³ \+ 1×2² \+ 0×2¹ \+ 1×2⁰ \= 13  
* **REPREZENTACE ČÍSEL**  
  * **Celá čísla** \- Ukládají se přímo v binární podobě  
    * Například: 25₁₀ \= 11001₂  
  * **Rozsah čísel závisí na počtu bitů:**  
    * 8 bitů → 0–255  
    * 16 bitů → 0–65535  
  * **Záporná čísla**  
    * Používá se tzv. **doplňkový kód** (two’s complement)  
    * umožňuje jednodušší aritmetické operace  
  * **Reálná čísla**  
    * Používá se tzv. **pohyblivá desetinná čárka** (floating point)  
    * standard IEEE 754  
    * **číslo je rozděleno na:**  
      * znaménko  
      * exponent  
      * mantisu  
      * To umožňuje ukládat velmi velká i velmi malá čísla  
* **REPREZENTACE TEXTU**  
  * Text je uložen pomocí znakových sad  
  * **ASCII**  
    * 7 bitů (128 znaků)  
    * obsahuje anglickou abecedu, číslice a speciální znaky  
  * **Rozšířené ASCII**  
    * 8 bitů (256 znaků)  
  * **Unicode**  
    * umožňuje zápis znaků všech jazyků  
    * dnes nejpoužívanější kódování UTF-8  
* **REPREZENTACE OBRAZU**  
  * Digitální **obraz je tvořen pixely** (obrazovými body).  
  * Každý pixel má uloženou svou **barvu v binární podobě**  
  * Udává počet pixelů (např. 1920 × 1080\)  
  * **Vyšší rozlišení:**  
    * lepší kvalita  
    * větší velikost souboru  
  * **Barevné modely**  
    * **RGB**  
      * Používá se na obrazovkách  
      * Každá složka (R, G, B) má často 8 bitů (0–255)  
      * Celkem tedy: 24 bitů na pixel → přes 16 milionů barev  
    * **Grayscale**  
      * Pouze odstíny šedi  
      * menší datová náročnost  
* **REPREZENTACE ZVUKU**  
  * zvuk je původně **analogový signál**  
  * pro zpracování počítačem musí být **převeden do digitální podoby**  
  * Tento proces se nazývá:  
    * **Vzorkování (sampling)**  
      * **měření hodnoty zvuku v pravidelných intervalech**  
      * např. 44 100 vzorků za sekundu (CD kvalita)  
    * **Kvantování**  
      * každému **vzorku je přiřazena číselná hodnota**  
      * Čím vyšší:  
        * vzorkovací frekvence  
        * bitová hloubka \- určuje přesnost záznamu  
        * tím vyšší kvalita zvuku, ale větší velikost souboru  
* **REPREZENTACE VIDEA**  
  * Video je tvořeno:  
    * sérií obrázků (např. 30 fps, snímky uloženy jako digitální obraz)  
    * zvukovou stopou  
  * Kvůli velké velikosti se používají kodeky: H.264, MPEG, HEVC  
* **KOMPRESE DAT**  
  * Komprese slouží ke zmenšení velikosti souborů  
  * **Bezztrátová komprese**  
    * nedochází ke ztrátě dat  
    * např. ZIP, PNG  
  * **Ztrátová komprese**  
    * část dat je odstraněna  
    * např. JPG, MP3  
    * Používá se tam, kde malá ztráta kvality není poznat  
* **VÝHODY DIGITÁLNÍ REPREZENATCE**  
  * snadné ukládání a kopírování  
  * odolnost proti šumu  
  * možnost šifrování  
  * rychlý přenos  
  * snadné zpracování algoritmy  
* **NEVÝHODY DIGITÁLNÍ REPREZENATCE**  
  * nutnost převodu analog → digitál  
  * velké objemy dat (např. video ve 4K)  
  * nutnost komprese  
  * možné chyby při přenosu

