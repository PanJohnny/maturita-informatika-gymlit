# Informace a dvojková soustava

## Osnova

* informace  
* jednotky informace  
* dvojková soustava  
* další číselné soustavy  
* kódování informací  
* digitalizace  
* výhody digitálního zpracování   
* přenos informací  
* chyby a zabezpečení

* **INFORMACE**  
  * rozdíl mezi daty a informací:  
    * **data** \= surové hodnoty (čísla, znaky, symboly)  
    * **informace** \= zpracovaná a interpretovaná data  
    * Příklad: číslo „25“ \= data 

	      „Teplota je 25 °C“ \= informace

* **Analogová informace**   
  * spojitá, nabývá nekonečně mnoha hodnot \-\> věrné zachycení reality  
    * citlivost na šum a rušení \-\> zhoršení kvality při kopírování  
    * př. gramofonová deska, kazeta  
  * **Digitální informace**   
    * Informace převedená do binární podoby  
    * Snadné ukládání a přenos, možnost komprese  
    * Kopírování bez ztráty kvality  
    * Př. CD, DVD, počítače,…  
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
    * 1 kB \= 1000 B, ale 1 KiB \= 1024 B – jednodušší na vyjádření ve dvojkové soustavě  
    * 1 MB \= 1000 kB, 1 MiB \= 1024 KiB  
    * 1 GB \= 1000 MB, 1 GiB \= 1024 MiB  
    * 1 TB \= 1000 GB, 1 TiB \= 1024 TiB  
* **DVOJKOVÁ SOUSTAVA** (BINÁRNÍ)  
  * základní jazyk počítačů  
  * číselná soustava o základu 2  
  * používá pouze číslice **0 a 1**  
  * **Proč počítače používají binární soustavu?**  
    * elektrické obvody mají dva stabilní stavy: proud teče (1)

    						  proud neteče (0)

* jednodušší a spolehlivější než více stavů  
  * Převod z desítkové do dvojkové soustavy  
  * **Princip**:  
    * číslo dělíme dvěma  
    * zapisujeme zbytky po dělení \-\> 0 nebo 1  
    * čteme odzadu  
    * Příklad: 13₁₀ \= 1101₂  
  * Převod z dvojkové do desítkové  
    * Používá se součet mocnin dvou:  
    * 1101₂ \= 1×2³ \+ 1×2² \+ 0×2¹ \+ 1×2⁰ \= 8 \+ 4 \+ 0 \+ 1 \= 13₁₀  
* **DALŠÍ ČÍSELNÉ SOUSTAVY V INFORMATICE**  
  * **Osmičková** (základ 8\) \- číslice 0–7  
  * **Šestnáctková** (hexadecimální, základ 16\)  
    * číslice 0–9 \+ A–F  
    * používá se pro:  
      * zápis barev (\#FF0000)  
      * adresy v paměti  
      * programování  
* **KÓDOVÁNÍ INFORMACÍ**  
  * **Počítač používá znakové sady:**  
    * **ASCII**  
      * 7 bitů  
      * 128 znaků  
      * základní anglická abeceda \+ znaky  
    * **Unicode**  
      * umožňuje zápis znaků všech jazyků  
      * dnes standard UTF-8   
* **DIGITALIZACE**  
  * **Převod analogové informace na digitální**  
  * Probíhá ve třech krocích:

    **1\. vzorkování**

    **2\. kvantování**

    **3\. kódování**

  * Příklad: mikrofon → zvuková karta → digitální zvuk  
* **VÝHODY DIGITÁLNÍHO ZPRACOVÁNÍ**  
  * snadné ukládání a kopírování  
  * rychlý přenos dat  
  * odolnost proti šumu  
  * možnost komprese  
* **PŘENOS INFORMACÍ**  
  * Způsob jakým se informace přenášejí mezi zařízeními  
  * **informace se přenášejí jako:**  
    * elektrické signály  
    * optické impulzy (optický kabel)  
    * rádiové vlny (Wi-Fi)  
  * **rychlost přenosu:**  
    * bit za sekundu (bps)  
    * např. 100 Mb/s  
* **CHYBY A ZABEZPEČENÍ**  
  * **Chyby při přenosu**  
    * šum  
    * rušení signálu  
    * ztráta dat  
    * kontrolní součty (CRC)  
  * **Šifrování**  
    * převod dat do nečitelné podoby  
    * používá se při internetové komunikaci (HTTPS)

