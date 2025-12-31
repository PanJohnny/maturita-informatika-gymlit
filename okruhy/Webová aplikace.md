# Webová aplikace

## Osnova

* Definice  
  * Web server / přes síť  
  * V prohlížeči na to koukáš  
  * Příklady a tak  
* Historický kontext  
  * Proč přesun standard každá služba vlastní desktopová aplikace na každá služba je na webu (prakticky, samozřejmě ne všechno)  
* Frontend  
  * HTML, CSS (víc pokryto v tématu)  
  * Formuláře  
* Backend  
  * API \- rest, …  
    * Komunikace s nějakou databází atp.  
* Díky FE+BE ukázka stacku

## Co to je?

* aplikace poskytovaná z web serveru  
  * skrz síť  
    * internet  
    * LAN  
    * intranet – síť v rámci nějaké společnosti  
* uživatel má přístup skrz prohlížeč  
  * jednoduchý přístup  
  * výhoda:  
    * netřeba instalovat na zařízeních  
  * nevýhoda:  
    * mnohdy horší výkon než desktopové aplikace  
    * nekonzistentní implementace specifikací napříč prohlížeči  
* příklady:  
  * internetové bankovnictví  
  * textové editory – kancelářské programy online (Google Docs)  
  * aukční portály  
  * eshopy  
  * mapy  
* aplikace klient-server  
  * klient: prohlížeč  
  * server: webový server – je sám o sobě bezstavový – nepamatuje si předešlé žádosti – k přidání stavů (např. pro zachování přihlášení uživatele) se vytváří sessions a informace o nich se ukládají často v cookies  
* protokol HTTP, HTTPS (+ můžeme využít web socket)

## Historie

* dříve u klient-server  
  * klient: desktopová aplikace  
  * server: server  
  * nevýhoda: aktualizuji server (např. přidávám funkci) → aktualizuji klientské aplikace (což musím provést na každém počítači)  
* přechod na webové aplikace  
  * generují dynamicky HTML (prohlížeč zobrazuje)  
  * interaktivita – JavaScript – skriptovací jazyk  
* příchod HTML5 (2014)  
  * umožnění offline aplikací  
  * spousta nových tagů  
    * canvas element – poprvé lze plně vykreslovat   
* používání API na klientské straně (fetch requesty, XHR)  
* velký rozmach  
  * v současné době (2025) je velmi velké množství aplikací těmi internetovými  
  * desktopové verze webových aplikací jsou často řešeny pomocí softwaru jako Electron – embedovaný prohlížeč zobrazující webové stránky (např. Discord, Steam, Obsidian, Whatsapp, …)

## Frontend

* rozhraní na straně klienta  
* prohlížeč vykresluje HTML soubory  
  * tagy pro různé elementy stránky  
    * tlačítka  
    * textová vstupní pole  
    * …  
* styly dodává CSS – vlastnosti elementů pro vykreslení  
  * změna layoutu stránky  
  * barvy  
  * fonty  
  * …  
* skriptování umožňuje JavaScript  
  * přidání interaktivity  
    * např. zmáčknu tlačítko a na obrazovce se objeví obrázek roztomilého koťátka  
* lze vykreslovat i naprosto vlastní obsah  
  * užitečné pro kreslení simulací či videoher  
  * canvas element (podporuje WebGL)  
* specifickým HTML elementem je formulář (form)  
  * není potřeba programovat interaktivitu v javascriptu  
  * když klient odešle formulář, tak prohlížeč naviguje (odešle žádost) na příslušnou adresu  
  * příklad: objednávám si fazole  
    * *formulář: \[Zadejte počet fazolí\] \[Zadejte svůj email\] \[Zadejte adresu\]*  
      * *akce: /kup*  
      * *metoda: POST*  
    * po kliknutí na tlačítko odeslat prohlížeč otevře v aktuálním okně stránku /kup  
      * server u tohoto načtení stránky obdrží co uživatel zadal do vstupních polí a tyto informace nějak zprocesuje  
      * uživatel dostane třeba potvrzení objednávky

## Backend

* implementace logiky serveru  
* často spojení s nějakou databází  
  * žádost uživatele → zpracování na serveru → žádost na databázi → zpracování odpovědi databáze na serveru → odeslání odpovědi uživateli  
* může být implementovaný v mnoha jazycích za použití různých frameworků (či bez)  
  * PHP – často bez frameworku, Nette…  
  * C\# a .NET – ASP.NET, …  
  * Java – Spring, …  
  * JavaScript (s nějakým runtimem jako NodeJS) – NextJS, …  
  * Python  
  * …  
* API – rozhraní pomocí kterého mohou s naším backendem komunikovat aplikace  
  * [REST](https://cs.wikipedia.org/wiki/Representational_State_Transfer)  
  * příklady využití:  
    * načtení informací o produktu z eshopu v mobilní aplikaci  
    * přihlášení/odhlášení  
  * příklady žádostí:  
    * POST /api/v1/user/login  
      * tělo: username=...\&password=...  
    * POST /api/v1/user/logout  
      * hlavičky:  
        * Authorization: …  
    * GET /api/v2/product?id=…  
* struktura posílaných dat  
  * často JSON, XML  
  * může být jakákoliv – text, bajtové pole, …

## Stack aplikace

* pojem popisující všechny vrstvy, které aplikace používá  
* příklad aplikace na psaní poznámek:  
  * klient – webový prohlížeč – webová stránka (HTML, JavaScript, CSS)  
  * server – PHP – zpracovává všechny žádosti a posílá stránky  
  * databáze – PostgreSQL – poznámky uživatelů  
  * další služby – CDN – nahrané materiály, externí API pro získávání ilustračních obrázků, služba pro přihlašování uživatelů

## Zdroje

* HTML5. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=HTML5\&oldid=25256119](https://cs.wikipedia.org/w/index.php?title=HTML5&oldid=25256119)  
* Representational State Transfer. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Representational\_State\_Transfer\&oldid=25220688](https://cs.wikipedia.org/w/index.php?title=Representational_State_Transfer&oldid=25220688)  
* Web Applications. In: *Web Applications* \[online\] \[cit. 31.12.2025\]. Dostupné z: [https://spring.io/web-applications](https://spring.io/web-applications)  
* Webová aplikace. In: *Wikipedie* \[online\]. 2025 \[cit. 31.12.2025\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=Webov%C3%A1\_aplikace\&oldid=25474761](https://cs.wikipedia.org/w/index.php?title=Webov%C3%A1_aplikace&oldid=25474761)