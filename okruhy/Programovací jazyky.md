# Programovací jazyky

## Osnova

* co je to programovací jazyk  
* historie  
* dělení  
  * dle míry abstrakce  
    * vyšší  
    * nižší (skoro strojový kód, např. Assembly)  
  * dle způsobu překladu a spuštění  
    * kompilované  
    * interpretované  
  * dle oblasti použití  
    * univerzální  
    * doménově specifické  
      * pro specifické využití (např. HTML)  
  * dle paradigmatu (pro vyšší)  
    * procedurální (imperativní)  
      * strukturované (např. C)  
      * nestrukturované  
      * objektově orientované (např. Java)  
    * neprocedurální (deklarativní)  
      * funkcionální (např. Haskell)  
      * logické (např. Prolog)  
    * multiparadigmatické  
      * kombinace více přístupů  
      * např. C++, Python  
* kompilace

## Co je to programovací jazyk

* prostředek pro zápis algoritmů  
* zápis algoritmu se nazývá program  
* vpodstatě soubor pravidel pro zápis algoritmu

## Historie

* první už v 19\. století  
  * tkalcovské stavy  
  * samohrající piana  
* začátek 20\. století děrné štítky  
* ve 30\. a 40\. letech  
  * lambda kalkul  
    * model popisu funkcí  
  * Turingův stroj ([wiki](https://cs.wikipedia.org/wiki/Turing%C5%AFv_stroj))  
    * vymyslel Alan Turing  
    * teoretický model počítače  
  * matematický základ pro algoritmy  
* po roce 1940 vytvořeny první elektricky napájené digitální počítače  
* sálové počítače  
  * štítky s dírami  
* 60\. léta Pascal  
* nástup domácích počítačů  
  * Basic, Assembly, …  
* 90\. léta Python, Java, …

## Dělení

### Dle míry abstrakce

* vyšší  
  * nemusíme provádět přímo operace s pamětí  
    * max práce s pointry a alokací, ale ne správa kde konkrétně ukládat co  
  * lepší čitelnost pro lidi  
  * např. Python, C\#, Java  
* nižší  
  * musí se definovat vše (např. operace s pamětí)  
  * blízko strojovému kódu  
  * např. Assembly (ASM)

### Dle způsobu překladu a spuštění

* kompilované (viz [kompilace](#kompilace))  
* interpretované \- interpreter přímo vykonává instrukce „řádek po řádku“, často skriptovací jazyky (JavaScript)

### Dle oblasti použití

* univerzální  
  * použiju pro všechny možné věci  
  * např. Python, C\#  
* doménově specifické  
  * pro specifické využití  
    * skriptovací jazyky pro aplikace  
    * značkovací jazyky  
  * např. HTML, SQL

### Dle paradigmatu

* vyšší programovací jazyky  
*  jak jsou formulovány řešení problémů ([wiki](https://cs.wikipedia.org/wiki/Programovac%C3%AD_paradigma))  
* imperativní (procedurální)  
  * popisuje výpočet pomocí posloupnosti příkazů  
  * určuje přesný postup (algoritmus)  
  * program \= sada proměnných, které mění pomocí příkazů svůj stav  
  * základní příkazy:  
    * přiřazení (int a=10)  
    * cykly (for, while, …)  
    * příkazy pro větvení (if, else)  
  * strukturované  
    * bez možnosti skoku (tzv. goto)  
      * radši použij funkce  
    * příklad: C  
  * nestrukturované  
    * s možností skoku  
  * objektově orientované (OOP)  
    * rozšiřuje procedurální přístup o koncept objektů  
      * sdružují data a chování (metody)  
    * umožňuje: zapouzdření, dědičnost, polymorfismus  
    * příklad: Java  
* deklarativní (neprocedurální)  
  * co se má dělat, ne jak se to má udělat  
  * není možné vytvářet globální proměnné  
    * proměnné samotné se využívají velmi střídmě  
  * všechno jsou hodnoty co vrací funkce  
  * nejsou k dispozici cykly, pouze rekurze  
  * funkcionální  
    * výpočet jako vyhodnocení funkcí (Haskell)  
  * logické  
    * použití matematické logiky (Prolog)  
* multiparadigmatické  
  * umožňují kombinovat jak imperativní, tak deklarativní přístupy  
  * Python, C++, …

## Kompilace {#kompilace}

* provádí kompilátor  
  * překládá vyšší jazyk do nižšího \- strojového, či rovnou do strojového kódu  
    * C  
      * běžně přímo strojový kód  
      * může být mezikrok do ASM  
    * C++  
      * mezikroky:  
        * konverze do ASM  
        * potom ASM to strojového kódu  
    * C\#, Java, (Python \- braný jako interpretovaný)  
      * mezikrok: kompilace do bytecode/IL  
      * potom kompilované JIT  
* Just In Time kompilace (JIT)  
  * zdrojový kód přeložený do bytecode  
    * nezávislý na platformě  
  * virtuální stroj tento bytecode interpretuje a spouští  
  * kompilátor překládá bloky kódu do strojového kódu, když se mají zrovna spustit  
    * třeba funkci, když ji zavolám

### Kompilace C++

1. preprocessing  
* vezme řádky začínající na \#  
  * \#include (jako import), podmíněná kompilace, …  
  * přidá konkrétní kód, vyřeší makra  
2. kompilace  
* kontrola syntaxe  
* převod kódu do ASM  
3. assembly  
* převede ASM do object kódu  
  * strojově čitelné  
  * binární  
4. linking  
* zkombinuje jednotlivé soubory object kódu  
* připojí externí knihovny  
* vytvoří spustitelný soubor (Windows – .exe)

### 

## Zdroje

* C++ Compilation process. In: *GeeksforGeeks* \[online\]. 18:37:00+00:00 \[cit. 22.03.2026\]. Dostupné z: [https://www.geeksforgeeks.org/cpp/how-to-compile-a-cpp-program-using-gcc/](https://www.geeksforgeeks.org/cpp/how-to-compile-a-cpp-program-using-gcc/)  
* Deklarativní programování. In: *Wikipedie* \[online\]. 2021 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Deklarativn%C3%AD\_programov%C3%A1n%C3%AD\&oldid=20747674](https://cs.wikipedia.org/w/index.php?title=Deklarativn%C3%AD_programov%C3%A1n%C3%AD&oldid=20747674)  
* Imperativní programování. In: *Wikipedie* \[online\]. 2021 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Imperativn%C3%AD\_programov%C3%A1n%C3%AD\&oldid=20696777](https://cs.wikipedia.org/w/index.php?title=Imperativn%C3%AD_programov%C3%A1n%C3%AD&oldid=20696777)  
* Objektově orientované programování. In: *Wikipedie* \[online\]. 2025 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Objektov%C4%9B\_orientovan%C3%A9\_programov%C3%A1n%C3%AD\&oldid=25348608](https://cs.wikipedia.org/w/index.php?title=Objektov%C4%9B_orientovan%C3%A9_programov%C3%A1n%C3%AD&oldid=25348608)  
* Programovací jazyk. In: *Wikipedie* \[online\]. 2025 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Programovac%C3%AD\_jazyk\&oldid=25074520](https://cs.wikipedia.org/w/index.php?title=Programovac%C3%AD_jazyk&oldid=25074520)  
* Programovací paradigma. In: *Wikipedie* \[online\]. 2025 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Programovac%C3%AD\_paradigma\&oldid=24932532](https://cs.wikipedia.org/w/index.php?title=Programovac%C3%AD_paradigma&oldid=24932532)  
* Strukturované programování. In: *Wikipedie* \[online\]. 2023 \[cit. 22.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Strukturovan%C3%A9\_programov%C3%A1n%C3%AD\&oldid=23157407](https://cs.wikipedia.org/w/index.php?title=Strukturovan%C3%A9_programov%C3%A1n%C3%AD&oldid=23157407)