# Paměť

## Osnova

* Co to je  
* Historie  
* Paměťová hierarchie  
* Dělení dle volatility (energetická závislost)  
* Správa paměti

## Co to je

* fyzické zařízení k ukládání programů nebo dat  
* pro okamžitou / trvalou potřebu  
* vnitřní paměť  
  * informace uložené ve fyzických zařízeních  
  * vysoké rychlosti  
  * RAM  
* vnější paměť  
  * fyzická zařízení pro ukládání programů a dat  
    * dlouhodobé ukládání  
  * pomalý, ale větší kapacita  
  * HDD, SDD  
* virtuální paměť  
  * procesy nemají přístup k opravdovým adresám  
  * přístup zajišťuje OS  
    * ten dává virtuální adresy  
    * důvod: bezpečnost  
      * nechceme aby se procesy mohli koukat do svých pamětí navzájem  
  * umožňuje také využít část vnější paměti (např. SSD)  
    * slouží k rozšíření kapacity vnitřní paměti (RAM)  
    * tomu se říká swap či paging  
* polovodičová paměť  
  * energeticky závislá  
    * RAM  
  * energeticky nezávislá  
    * flash, ROM  
  * paměťové buňky  
    * 2 stavy: 1 bit (zapnuto / vypnuto)  
  * buňky se shlukují do „slov“ s pevnou délkou  
    * každé slovo má svou adresu

## Historie

* 40\. léta 20\. století – jen několik bytů  
  * ENIAC  
    * elektronky  
    * výpočty jen s 20 místnými čísly  
  * potom paměť s akustickou zpožďovací linkou  
  * na konci 40\. let snahy o vývoj energeticky nezávislých pamětí  
    * feritové paměti  
* 60\. léta  
  * tranzistorové paměti

## Paměťová hierarchie

* popisuje uspořádání paměťových zařízení podle  
  * rychlosti přístupu  
  * kapacity  
  * ceny  
* cílem je zajistit, aby procesor měl co nejrychlejší přístup k datům, která aktuálně potřebuje  
  * když jsme přistoupili nedávnou, tak jsou data blíž  
* dělení podle rychlosti a velikosti:  
* registry  
  * nejrychlejší a nejmenší paměť  
  * přímo v procesoru (CPU)  
  * slouží k uchovávání aktuálně zpracovávaných dat a instrukcí  
* cache (L1, L2, L3)  
  * velmi rychlá, malá paměť (SRAM) umístěná blízko CPU nebo v něm  
  * L1 Cache  
    * nejmenší a nejrychlejší  
    * oddělená pro data a instrukce  
    * přímo v jádře CPU  
  * L2 Cache  
    * větší než L1, ale pomalejší  
    * obvykle sdílená jádry  
  * L3 Cache  
    * největší a nejpomalejší z cache pamětí  
    * často sdílená všemi jádry procesoru  
* hlavní paměť (RAM)  
  * větší, pomalejší než cache (DRAM)  
  * pracovní paměť pro spuštěné programy  
* sekundární úložiště (SSD/HDD)  
  * největší kapacita a nejpomalejší přístup  
  * trvalé ukládání dat a rozšíření RAM pomocí virtuální paměti

## Dělení dle volatility

### Volatilní paměť

* vyžaduje neustálé napětí  
* statická / dynamická RAM  
  * statická (SRAM)  
    * nepotřebuje periodickou obnovu dat  
    * rychlá, ale složitější – drahá  
    * používá se jako hardwarová cache  
    * čtyři-šest tranzistorů na jeden bit  
  * dynamická (DRAM)  
    * při každém přečtení se data vymažou  
    * kondenzátory se vybíjí → vyžaduje obnovovací cykly  
      * potřebuje tudíž pořád   
    * jeden bit je jeden tranzistor a kondenzátor  
      * nižší ceny při vyšší kapacitě  
    * synchronní DRAM \= SDRAM  
      * moderní paměti co se používají: DDR3, DDR4, DDR5

### Nevolatilní paměť

* uchovává informaci i bez napájení  
* ROM  
  * read-only-memory (jen čtení)  
  * používá se pro ukládání firmwaru  
  * zapisuje se do ní jen při výrobě  
* flash  
  * flash disky, SD karty, ale i ukládání firmwaru  
  * dá se do ní číst / psát  
* HDD  
  * pevný disk  
  * data zapisovaná mechanicky na točící se disk  
    * mechanicky  
* SSD  
  * polovodičový disk  
  * elektrické buňky rozdělené do stránek a bloků  
    * digitální reprezentace dat  
  * výhody: vyšší rychlost, odolnost vůči otřesům  
  * horší životnost než HDD

## Správa paměti

* soubor metod, které OS využívá pro  
  * přidělování a uvolňování operační paměti  
  * nastavování ochrany  
  * správa adresace  
* garbage collection  
  * automatizovaná správa paměti  
    * uvolňování nepoužívané  
* ruční správa paměti  
  * program může požádat o alokaci paměti a následné uvolnění  
  * C: malloc, free, …  
* adresování  
  * přímé  
    * fyzický adresový prostor  
    * adresa referuje skutečnou adresu v rámci hardwaru  
  * virtuální  
    * logický adresový prostor  
    * umožňuje přistupovat k médiím jako SSD/HDD stejně jako k RAM  
      * jednoduché rozšíření paměti  
* úkoly správy fyzického adresového prostoru (plní OS)  
  * přidělování paměťových regionů na požádání procesů  
  * uvolňování paměťových regionů na požádání procesů  
  * udržování informací o obsazení adresového prostoru  
  * zabezpečení ochrany paměti – zabránění přístupu procesu k paměti mimo jeho přidělený region  
  * u víceúlohových systémů musí podporovat střídavý běh více procesů či v minimálním případě mu nesmí bránit  
* chyby při správě paměti  
  * aritmetické přetečení (integer overflow)  
  * únik paměti (memory leak)  
    * proces nevrátí zpátky paměť  
      * to se vrší a vrší  
    * proces se vypne  
  * porušení ochrany paměti  
    * proces se pokouší dostat k paměti kam nemá přístup  
    * OS ho vypne  
  * přetečení vyrovnávací paměti  
    * proces zapisuje do své alokované paměti, ale pak už ji zaplní a tak píše do paměti jiných procesů  
    * základ mnoha softwarových zranitelností

## Zdroje

* C Memory Management (Memory Allocation). In: \[cit. 12.05.2026\]. Dostupné z: [https://www.w3schools.com/c/c\_memory\_management.php](https://www.w3schools.com/c/c_memory_management.php)  
* Memory Management in Operating System. In: *GeeksforGeeks* \[online\]. 00:52:07+00:00 \[cit. 12.05.2026\]. Dostupné z: [https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/](https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/)  
* Počítačová paměť. In: *Wikipedie* \[online\]. 2026 \[cit. 12.05.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A1\_pam%C4%9B%C5%A5\&oldid=25644691](https://cs.wikipedia.org/w/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A1_pam%C4%9B%C5%A5&oldid=25644691)  
* Správa paměti. In: *Wikipedie* \[online\]. 2025 \[cit. 12.05.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Spr%C3%A1va\_pam%C4%9Bti\&oldid=24803657](https://cs.wikipedia.org/w/index.php?title=Spr%C3%A1va_pam%C4%9Bti&oldid=24803657)

