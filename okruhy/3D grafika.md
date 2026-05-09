## OSNOVA

* základní informace  
* 3D model  
* typy 3D modelování  
* textury a materiály  
* světlo  
* kamera  
* rendering  
* animace  
* zobrazení 3D objektu na 2D obrazovce  
* výkon a hardware  
* formáty 3D souborů  
* programy  
* využití   
* výhody a nevýhody

* grafika zobrazovaná ve **třech rozměrech** (šířka, výška, hloubka)  
* používá souřadnice X, Y, Z  
* vytváří **dojem prostoru a hloubky**  
* umožňuje **realistické modelování** objektů  
* **Použití:** hry, filmy, animace, architektura, reklamy  
* **ZÁKLADNÍ PRINCIP 3D GRAFIKY**  
  * 3D grafika pracuje ve třech krocích:

		1\. Modelování – vytvoření 3D objektu  
		2\. Texturování – přidání povrchu (barva, materiál)  
		3\. Rendering – výpočet finálního obrazu (vypočítání světla, stínů, odrazů)

* **3D MODEL**  
  * tvořen pomocí **vrcholů** (vertices), **hran** (edges) a **ploch** (faces, polygon)  
  * nejčastěji **trojúhelníky** (nejjednodušší stabilní plocha)  
  * Čím více polygonů model obsahuje:  
    * tím je detailnější  
    * tím je náročnější na výkon  
* **TYPY 3D MODELOVÁNÍ**  
  * **Polygonální modelování**  
    * objekt tvořen sítí **polygonů** (nejčastěji trojúhelníky nebo čtyřúhelníky)  
    * Polygonální síť (mesh) z \- **vrcholů, hran, ploch**  
    * Ze základních tvarů \-\> složitější objekty  
    * **Tvarování** \- dělení ploch na menší, posouvání vrcholů, přidávání nových polygonů  
    * **Výhody** \- jednoduché vytváření

	       \- vhodné pro real-time rendering

* **Nevýhody** \- malý počet polygonů \-\> hranatý objekt

		\- vysoký počet polygonů \-\> zatěžuje grafickou kartu

* nejčastější ve **hrách, VR**, filmová animace (jednodušší modely)  
  * **NURBS modelování**  
    * založeno na matematických křivkách a plochách  
    * Povrch je vypočítáván podle vzorců ne z polygonů \- dokonale hladké plochy  
    * **Výhody** \- přesné tvary, hladké plochy, ideální pro technické návrhy  
    * **Nevýhody** \- složitější výpočty, převod do polygonů při renderingu  
    * používá se v **architektuře, letectví**, automobilový průmysl  
  * **Sochařské modelování (sculpting)**  
    * digitální modelování podobné práci s hlínou  
    * **Tvarování** \- tahání, vyhlazování, přidávání materiálu  
    * Model může mít miliony polygonů  
    * Používá se **dynamické rozdělování ploch**  
    * **Výhody** \- realistické výsledky, vysoký detail  
    * **Nevýhody** \- vysoké nároky na výkon, velký počet polygonů, často se musí optimalizovat pro hry  
    * používá se u **filmových nebo herních postav** a detailních modelů  
* **TEXTURY A MATERIÍÁLY**  
  * **textura** \= 2D obrázek aplikovaný na 3D objekt (barva, vzor, detaily)  
  * **materiál** určuje **chování povrchu vůči světlu**: lesk, průhlednost, odraz světla  
  * používá se **UV mapování** (rozbalení 3D objektu do 2D plochy)  
* **SVĚTLO**  
  * simuluje **reálné osvětlení,** bez něj model vypadá nepřirozeně  
  * **vytváří**: stíny, odrazy, atmosféru (např. barvou světla)  
  * **typy světel:** **bodové** \- z jednoho bodu **do všech směrů,** intenzita se snižuje se vzdáleností (lampy, světla v místnosti, malé zdroje světla)

	 **směrové** \- svítí **jedním směrem**, vzdálenost od objektu nehraje roli, **ostré stíny** (slunce, velké zdroje světla)  
	 **plošné** \- z určité **plochy**, měkčí a **realističtější stíny**, výpočetně náročné (studiové osvětlení, realistické filmové scény)

* **KAMERA**  
  * určuje **pohled na scénu**  
  * **nastavuje:** úhel, vzdálenost, perspektivu  
  * může být **statická nebo animovaná**  
* **RENDERING**  
  * proces **výpočtu finálního obrazu** ze scény (velmi náročný proces)  
  * **počítá**: světlo, stíny, odrazy, materiály  
  * může být: **real-time rendering** (v reálném čase – hry)

     **offline rendering** (dlouhý výpočet – filmy)

* **ANIMACE**  
  * změna polohy objektů v čase  
  * používá se:  
    * **keyframing** (klíčové snímky)  
    * **motion capture** (snímání pohybu herců \- Polar Expres, Avatar)  
  * využití: filmy, hry, reklamy  
* **ZOBRAZENÍ 3D OBJEKTU NA 2D OBRAZOVCE**  
  * používá se projekce (převod 3D prostoru na 2D plochu)  
  * typy: **perspektivní** (objekty v dálce jsou menší)

	   **ortogonální** (bez perspektivy, technické výkresy)

* **VÝKON A HARDWARE**  
  * 3D grafika je **náročná** na: **procesor** (CPU)

				**grafickou kartu** (GPU)

* **GPU:** specializovaná jednotka pro výpočty grafiky

	    používají se technologie:

* ray tracing (simulace realistického světla)  
  * shader (program určující vzhled povrchu)  
* **FORMÁTY 3D SOUBORŮ**  
  * OBJ, STL (3D tisk), BLEND, FBX  
* **PROGRAMY**  
  * Blender, Autodesk Maya, Cinema 4D, 3ds Max, ZBrush  
* **VYUŽITÍ**  
  * počítačové hry  
  * animované filmy  
  * architektonické vizualizace  
  * medicína  
  * průmyslový design  
  * virtuální realita (VR)  
* **VÝHODY A NEVÝHODY**  
  * **Výhody** \- realistické zobrazení, simulace prostoru, interaktivita  
  * **Nevýhody** \- vysoké nároky na hardware, složitější tvorba, delší čas výpočtu