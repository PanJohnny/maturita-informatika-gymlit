# Přenos informací

## Osnova

* Definice dat a informací  
  * Data, informace, bit, byte  
* Způsoby přenosu  
  * Historie vs dnes  
  * Komunikační model, přenosové kanály, signály (digitální, analogový)  
* Kódování a modulace  
* Rychlost přenosu informací  
  * Kapacita kanálu \- Shannon  
  * Komunikační protokoly a vrstvy  
* Komprese dat \- ztrátová, bezztrátová  
* Bezpečnost přenosu  
* Chyby při přenosu informací  
  * Šum, zkreslení,...  
* Uchovávání a přenos  
* Příklady přenosu informací

* **DEFINICE DAT A INFORMACÍ**  
  * Data \= jednotlivé údaje zpracovávané počítačem (čísla, znaky,...)  
- Sama o sobě nemusí mít význam (získají ho až kontextem)  
  * Informace \= data která získají význam v určitém kontextu, slouží ke zpracovávání uchovávání nebo přenášení dat  
- Dělení: textové, obrazové, zvukové


  * Bit \= nejmenší jednotka informace (hodnoty 0 /1)  
  * Byte \= 8 bitů, používá se pro velikosti souborů a paměti  
      
  * Nosičem informace je signál, dělí se na:   
- Analogový (spojitý) \- plynulé hodnoty, většinou vstupní signál (např. Záznam mikrofonu, kamery)  
- Digitální (diskrétní) \- oddělené stavy, “vzorkovaný” signál (např. digitální výstup)


  Metadata \= data poskytující informace o jiných datech (vyhledávání nebo zpracování popisovaných dat)

    
  A/D převodník \- z hlasu do počítače

  D/A prevodnil \- z počítače do hlasu


  Digitalizace \- převod analogového signálu na digitální data


* **ZPŮSOBY PŘENOSU**  
  * Dříve \- diskety, CD  
  * Dnes \- optické sítě, UTP \- twisted pair (nedochází k tak velkému rušení dat, vyšší rychlost přenosu)


  * Komunikační model  
- Zdroj informace \-\> kódování (převod na bity) \-\> vysílač \-\> přenosový signál (kabel/vzduch/optika) \-\> (rušení/šum) \-\> přijímač \-\> dekódování \-\> příjemce informace

  * Přenosové kanály \- metalické vedení \- drát z jenoho místa na druhé  
- Optické vlákno \- “telegraf” se světlem \- rychlý přenos dat, odolný  
- Bezdrátové \- není nutnost kabeláže

  * Sériový vs. paralelní přenos \- dnes sériový \- přenos v jednom kanále  
- Dříve paralelní \- např. 8 kanálů najednou pomalé


  * Simplex \- jen jedním směrem (TV vysílání, rádio)  
  * Half-duplex \- oběma směry, ale střídavě (vysílačky)  
  * Full-duplex \- oběma směry současně (telefon, moderní sítě)  
      
  * Paketový přenos \- data se rozdělí na pakety, které mohou jít různými cestami a na konci se složí (internet)  
  * Okruhový přenos \- vytvoří se vyhrazené spojení po celou dobu komunikace (telefon)  
      
* **KÓDOVÁNÍ A MODULACE** \- aby informace mohly být zpracovány počítačem, musí být převedeny na data \-\> provádí se kódováním (určuje jak informaci zapíšeme do bitů a jak ji pošleme)  
  * Kódování \= převod informace na bity  
  * Modulace \= “namíchání” bitů do signálu (umožňuje přenášet data na určité frekvenci \-\> lepší využití kanálu)


* **RYCHLOST PŘENOSU INFORMACÍ**  
  * Závisí na: rychlosti, zpoždění a propustnosti  
  * Kapacita kanálu \- Shannon  
- Kapacita kanálu závisí na šířce pásma a šumu  
  * Komunikační protokoly a vrstvy  
      
* **KOMPRESE DAT \= speciální případ konverze dat (cílem je zmenšit objem a zrychlit přenos)**  
  * Ztrátová \- některé informace nenávratně ztraceny (nelze je zrekonstruovat)  
- JPEG, MP3  
  * Bezztrátová \- nedosahuje takové úrovně komprese jako ztrátová, ale soubor lze rekonstruovat do původní podoby  
- ZIP, PNG  
    
* **BEZPEČNOST PŘENOSU**  
  * Důvěrnost, integrita, autentizace  
  * HTTPS, WPA2/WPA3, VPN


* **CHYBY PŘI PŘENOSU INFORMACÍ**  
  * Šum \- náhodné nežádoucí změny signálu (př. vliv elektroniky, tepla nebo okolního prostředí)  
  * Zkreslení \- změna tvaru nebo kvality signálu (př. špatný přenos)  
  * Útlum \- zeslabení signálu při přenosu (př. vzdálenost, překážky, poškozené médium)  
  * Rušení \- ovlivnění signálu jiným signálem (př. elmg vlny)n  
  * Oprava \- opakované odeslání, samoopravné kódy  
      
* Uchovávání a přenos  
  * Online  
  * Offline  
  * Př. web(HTTP/HTTPS), e-mail, video streaming, cloud, VoIP...


* Příklady přenosu informací  
  


  ## Zdroje

* Informace a data \- WikiSkripta. In: \[cit. 31.03.2026\]. Dostupné z: [https://www.wikiskripta.eu/w/Informace\_a\_data](https://www.wikiskripta.eu/w/Informace_a_data)