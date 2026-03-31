# Operační systémy

## Osnova

* definice OS  
* hlavní funkce OS  
* proč OS vznikl?  
* architektura OS  
* druhy OS podle oblasti použití  
* druhy OS podle počtu uživatelů  
* druhy OS podle počtu úloh  
* příklady významných OS  
* multitasking  
* přístupová práva a bezpečnost v OS  
* práce se soubory

* **Operační systém** \= základní software, který zajišťuje chod počítače a umožňuje uživateli pracovat s aplikacemi.  
* program /soubor programů, který se spustí při startu počítače  
* zajišťuje komunikaci mezi hardwarem a aplikacemi (bez něj nelze spouštět programy)  
    
* **HLAVNÍ FUNKCE OS**   
  * **Správa procesů**  
- přidělování výpočetního času CPU jednotlivým procesům  
- rozhoduje, který proces poběží a jak dlouho  
  * **Správa paměti**   
- přiděluje operační paměť procesům  
- chrání paměť jednotlivých procesů před sebou navzájem  
  * **Správa zařízení**  
- ovládá periferie (klávesnice, myš, tiskárna…) \+ využívá ovladače zařízení  
  * **Organizace přístupu k datům**  
- ukládání a čtení dat z disků  
- práce se soubory a složkami  
- (příp. zamezení neoprávněného přístupu)  
  * **Komunikace s uživatelem** prostřednictvím speciálního programu zvaného obecně Shell  
  * **Provádění zadaných příkazů** (uživatelem) a spouštění aplikací

* **PROČ OS VZNIKL?**   
  * Každý proces potřebuje: procesor, paměť a vstupní a výstupní zařízení  
  * bez OS by si každý proces musel řídit hardware sám a systém by byl složitý a nestabilní  
  * OS vznikl proto, aby:  
- **sjednotil přístup k hardware**  
- **zjednodušil tvorbu programů**  
- **zvýšil bezpečnost a stabilitu**  
  * obecně zjednodušit práci programům i uživatelům  
      
* **ARCHITEKTURA OS**   
  * **Jádro** (kernel) \- základní část OS  
- zajišťuje: správu procesů, správu paměti, komunikaci s hardwarem  
- bez jádra OS nefunguje  
  * **Ovladače zařízení** \- zajišťují komunikaci s hardwarem  
  * **Pomocné programy** \- např. správa uživatelů, update OS,...  
  * **Uživatelské rozhraní** \- prostředník mezi uživatelem a OS  
- textové (příkazový řádek)  
- grafické (okna, ikonky)  
- umožňují spuštění programů a práci se soubory


* **DRUHY OS PODLE OBLASTI POUŽITÍ** \- desktopové, serverové, mobilní, vestavěné  
  * **Desktopové** \- osobní počítače a notebooky  
  * **Serverové** \- servery \-\> stabilita, bezpečnost, více uživatelů  
  * **Mobilní** \- telefony a tablety \-\> dotykové ovládání, úspora energie  
  * **Vestavěné** \- jednoúčelové zařízení \-\> spotřebiče, auta, průmysl  
      
* DRUHY OS PODLE POČTU UŽIVATELŮ \- jednouživatelské, víceuživatelské  
  * jednouživatelské \- OS určen pro jednoho uživatele (Windows, MacOS)  
  * víceuživatelské \- OS umožňuje práci více uživatelů současně (každý uživatel má vlastní účet a prostředí \- např. Linux, serverové systémy)  
      
* DRUHY OS PODLE POČTU ÚLOH \- jednoúlohové, víceúlohové  
  * jednoúlohové \- OS umožňuje běh pouze jednoho programu v daný čas  
  * víceúlohové \- OS umožňuje běh více programů současně (procesor rychle přepíná mezi úlohami, uživatel má pocit, že běží současně)  
      
* **PŘÍKLADY VÝZNAMNÝCH OS** \- Microsoft Windows, Linux, macOS, Android, iOS,...  
  * **Windows** \- nejrozšířenější desktopový OS  
  * **Linux** \- otevřený systém, často na serverech  
  * **macOS** \- OS pro počítače Apple  
  * **iOS** \- mobilní OS od Apple, uzavřený ekosystém  
  * **android** \- mobilní OS, založený na Linuxu  
      
* **MULTITASKING** \- schopnost OS spouštět více programů současně (ve skutečnosti OS rychle přepíná procesor mezi úlohami  
  * **kooperativní** \- programy si předávají řízení, nestabilní  
  * **preemptivní** \- OS přiděluje čas sám (lze nastavit priority)  
- moderní OS používají preemptivní multitasking


* **PŘÍSTUPOVÁ PRÁVA A BEZPEČNOST V OS**  
  * OS **umožňuje práci více uživatelů**  
  * každý uživatel má: účet, heslo, přístupová práva  
  * rozdělení uživatelů: **administrátor, běžný uživatel**  
  * OS chrání: soubory, paměť, procesy  
  * další bezpečnostní prvky: aktualizace, firewall, šifrování  
  * **cíl: zabránit zneužití, ochránit data i systém**  
      
* **PRÁCE SE SOUBORY**  
  * **soubor** \= základní jednotka pro ukládání dat (text, program, obrázek,...)  
  * organizace souborů do **složek** (OS udržuje hierarchii)  
  * **základní operace**: vytvoření, otevření, uložení, kopírování, čtení,...  
  * atributy a metadata \- velikost, datum vytvoření, změny, read-only,...  
  * práva k souborům \- OS “hlídá” kdo může soubor číst /upravovat / spouštět  
  * **cesta k souboru** \- **absolutní** \- umístění souboru od úplného začátku

    C:\\Users\\Kuba\\Documents\\škola\\poznámky.txt

    

- **relativní** \- umístění souboru vzhledem k aktuální složce (kde se nacházím)

  obrazky\\graf.png


  * **souborový systém** \- způsob jakým OS **ukládá a organizuje soubory na disku**  
- vytvoření \- OS zapíše do “evidence”  že soubor existuje a přidělí mu místo na disku  
- uložení \- data se zapíšou do přidělených bloků na disku \+ metadata se aktualizují  
- otevření \- OS najde podle evidence kde soubor leží a načte ho  
- smazání \- OS odstraní záznam v evidenci a označí místo jako volné  
- příklady: NTFS (Windows), FAT32/exFAT (flashky)


## Zdroje

* TANENBAUM, Andrew S. a Albert WOODHULL. *Operating systems: design and implementation: \[the MINIX book\]*. 3\. ed. vyd. Upper Saddle River, NJ: Pearson Prentice Hall, 2006\. The MINIX book. ISBN 978-0-13-142938-3.  
* Informatika na Gymnáziu a Jazykové škole s právem státní jazykové zkoušky Zlín. In: \[cit. 31.03.2026\]. Dostupné z: [https://www.gjszlin.cz/ivt/esf/ostatni-sin/operacni-systemy-2.php](https://www.gjszlin.cz/ivt/esf/ostatni-sin/operacni-systemy-2.php)  
* Jak na Internet \- Operační systémy. In: \[cit. 31.03.2026\]. Dostupné z: [https://www.jaknainternet.cz/page/1757/operacni-systemy/](https://www.jaknainternet.cz/page/1757/operacni-systemy/)  
* Operační systém. In: *Wikipedie* \[online\]. 2026 \[cit. 31.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Opera%C4%8Dn%C3%AD\_syst%C3%A9m\&oldid=25745441](https://cs.wikipedia.org/w/index.php?title=Opera%C4%8Dn%C3%AD_syst%C3%A9m&oldid=25745441)  
* Operační systémy – Umíme to. In: \[cit. 31.03.2026\]. Dostupné z: [https://www.umimeinformatiku.cz/cviceni-operacni-systemy](https://www.umimeinformatiku.cz/cviceni-operacni-systemy)

