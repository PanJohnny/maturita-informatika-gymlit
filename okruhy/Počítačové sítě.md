# Počítačové sítě

# Osnova

* Co to je  
* Historie  
  * Arpanet, Internet, …  
* Síťová architektura  
  * Zařízení, protokoly, vrstvy, …  
  * Principy komunikace \- příklad  
  * Specifikace nejpoužívanějších protokolů  
  * Viz přenos informací \- víc do detailu rozpracované tam  
* Dělení sítí  
  * Rozlehlost \- PAN, LAN, MAN, WAN  
  * Přepojování \- komutační, paketová  
  * Podle postavení uzlů \- P2P, klient-server  
  * Podle druhů signálů \- analog, digitál  
  * Vlastnictví \- veřejná, privátní, virtuální privátní (VPN)  
* Síťová zařízení  
  * Aktivní \- repeater, hub, switch, bridge, router  
  * Pasivní \- kabely  
    * Viz přenos informací \- víc do detailu rozpracované tam  
* Topologie  
  * tvar/struktura sítě

## Co to je?

* propojená zařízení  
  * vzájemná komunikace – za určitých pravidel  
  * telefony, počítače, IoT (ledničky), …  
  * drátově  
    * metalické kabely  
      * elektrické impulsy  
      * ethernet  
      * pomalejší než světlo  
        * (nejnovější kabely jsou schopny až 40 Gb/s)  
    * optické kabely  
      * modernější  
      * kabel hodně dobře vede světlo  
        * skoro rychlost světla  
        * vyšší přenosové rychlosti (100 Gb/s)  
      * vhodné na větší vzdálenosti  
        * pár milisekund pro přenos mezi kontinenty  
  * bezdrátové  
    * skrze vlny  
    * mobilní sítě  
    * rádiové vlny  
      * Wi-Fi  
        * často 2.4 GHz  
          * přechází se na 5 GHz  
            * méně využívané → menší rušení → větší šířka pásma  
      * Bluetooth  
        * na několik metrů  
        * používané u PAN  
          * např. streamování audia do sluchátek  
        * přepínání kanálů (cca 80, 1 MHz od sebe), okolo frekvence 2,4 GHz  
    * mikrovlnné  
      * přenos na dlouhé vzdálenosti  
        * ale mezi odesílatelem a příjemcem musí být prázdný prostor  
      * satelitní komunikace  
        * pro Internet např. Starlink  
          * moje zařízení → router → anténa na střeše →družice → datové centrum → Internet… a zpátky  
          * vyšší ping (doba odezvy po tom co pošlu někam nějakou žádost)  
      * místa kde nejsou kabely  
        * např. dám si na střechu anténu, kterou namířím na vysílač, který je k Internetu připojený  
          * komunikuju skrz něj s internetem

## Historie

* první pokusy pro komunikaci mezi počítači na konci 50\. let 20\. století  
  * armáda  
* v 1960\. letech ARPANET  
* oblíbenost na počátku 80\. let  
  * základy WWW

## Síťová architektura

* umožňuje výměnu dat mezi systémy  
* složitá → rozdělení do vrstev  
  * ![vrstvy v referenčním modelu ISO/OSI](/assets/OSI_Model_v1.svg)  
  * každá vrstva poskytuje službu vyšší vrstvě (např. transportní umožňuje transport paketů vrstvě aplikační přes TCP)  
  * funkce vrstvy definovány protokolem  
    * protokol \= soubor pravidel při vyměnování komunikace mezi dvěma či více komunikujícími prvky  
* standardy \- Internet Engineering Task Force (IETF) a další organizace  
  * publikují [RFC](https://www.rfc-editor.org/)

### Internetové protokoly

* skupina protokolů pro Internet  
* transportní  
  * TCP (transfer control protocol)  
    * bezztrátový  
    * každý balíček obsahuje kontrolní informace  
      * kolikátý je v pořádí, …  
      * na základě toho se ověřuje, zda přišla všechna data a bez korupce  
      * pokud dojde k problému → balíček odeslaný znovu  
        * pomalejší  
    * vhodný pro přenos dokumentů, souborů, webů, …  
      * tam kde nepotřebujeme tu věc co nejdřív  
      * nesmí dojít ke ztrátě/přeházení pořadí  
  * UDP (user datagram protocol)  
    * ztrátový  
    * místo paketů datagramy  
    * nižší komplexnost  
      * neopravuje  
      * neposílá nic znovu  
    * vhodný pro realtime věci  
      * chci co nejrychlejší přenos  
      * VoIP – internetové volání  
        * nechci opoždění zvuku  
        * menší ztráty mi nevadí  
* aplikační  
  * HTTP (hypertextový transferový protokol)  
    * protokol pro přenos dokumentů – webových stránek  
    * mnoho verzí  
      * převážná většina z nich využívá TCP  
      * od verze HTTP/1.1 se poslané zprávy rozloží na několik částí (tzv. chunky)  
        * výhoda: je nám jedno jak velký je posílaný soubor – nemusíme znát jeho délku a celý ho tím pádem napsat do dočasné paměti  
    * dělení zprávy na žádost a odpověď  
    * složení zprávy  
      * HTTP header  
        * pouze pro žádost  
          * metoda (GET, …)  
          * cesta k dokumentu (/o-nas)  
        * pouze pro odpověď  
          * HTTP status  
            * číselný  
            * členěno do kategorií podle toho jaké číslo je na začátku  
            * 200 – OK, 404 – nenalezeno, 500 – error na straně serveru, …  
            * další příklady: [http.cat](https://http.cat)  
        * verze protokolu (1.1, 2, …)  
        * hlavičky (klíč: hodnota)  
          * informace jako cookies, co je váš prohlížeč, jaký typ serveru to je, …  
          * některé povinné  
            * u HTTP/1.0 musí být Content-Length (délka souboru)  
      * HTTP body  
        * samotný zaslaný dokument  
        * není třeba u některých typů žádostí  
        * obrázek, webová stránka, text, video, …  
    * pro WWW  
  * HTTPS (-||- \+ secure)  
    * zabezpečené verze HTTP (nástavba)  
      * šifrování dat  
      * certifikáty pro domény (lze ověřit, že server s kterým komunikujete je skutečně ten, za který se vydává)  
      * jen klient (váš prohlížeč) a server (např. webový) ví, jaká data jsou skutečné odesílána  
    * využívají se bezpečnostní vrstvy  
      * SSL (secure socket layer)  
      * TLS (transport layer security)  
        * novější

## Dělení

* rozlehlost  
  * PAN (Personal area network)  
    * osobní síť jednotlivce (tvoje zařízení)  
    * připojení pomocí Bluetooth, USB, …  
    * např. telefon – chytré hodinky  
  * LAN (Local area network)  
    * domácí/kancelářské sítě  
    * drátová / bezdrátová (WLAN – wireless LAN)  
    * video hry – local multiplayer  
      * využívá toho, že zde většinou nejsou omezení pro peer-to-peer komunikaci krom firewallů zařízení  
      * např. Minecraft tlačítko (open to LAN)  
    * VLAN – virtuální LAN  
      * ![koncept VLAN](/assets/VLAN_Concept.svg)  
        * Autor: Michel Bakni – Tento soubor byl odvozen z:Workstation symbol-Blue.svgSwitch symbol-Blue.svg, CC BY-SA 4.0, [https://commons.wikimedia.org/w/index.php?curid=151750621](https://commons.wikimedia.org/w/index.php?curid=151750621)  
      * vytvoření takové podsítě – zapojíme zařízení do switche a ten třeba zapojíme až do routeru  
      * příklad využití  
        * mám 2 počítačové učebny – každá má svůj vlastní VLAN  
        * VLANy z učeben jsou pak napojeny např. na router  
  * MAN (Metropolitan Area Network)  
    * spojuje několik bloků, až celá města  
  * WAN (Wide area network)  
    * pokrývá rozlehlé geografické území  
      * překračuje hranice města, států, …  
    * nejznámější sítí WAN je Internet

![diagram sítí](/assets/Component%20diagram%20for%20project%20Liberouter.svg)  
Autor: Původně soubor načetl Kratochvíla na projektu Wikipedie v jazyce čeština – Na Commons přenesl z cs.wikipedia uživatel jitka., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4224433

* přepojování  
  * komutační  
    * síť s přepojováním okruhů  
    * komunikace probíhá po předem vyhrazené lince  
    * telegrafie, telefonie (dřív u drátových telefonů)  
    * telefonní sítě  
    * starší technologie  
  * paketové  
    * cesta kterou data (v podobě paketů) putují není předem známa  
    * protokol IP  
      * pakety zahrnují adresu odesílatele a příjemce  
      * síťové uzly pak nasměrovávají pakety kam mají a podle dostupnosti tras  
      * pakety můžou přijít v rozházeném pořadí, nebo se některé ztratí (to řeší protokol TCP)  
    * Ethernet, …  
* podle postavení uzlů  
  * P2P (*peer-to-peer*) – klient–klient  
    * přímá komunikace mezi klienty  
      * oba dva na stejné úrovni  
    * může být rychlejší  
    * decentralizované  
    * využíváno např. při torrentování  
  * klient-server  
    * server  
      * něco poskytuje (služby)  
      * souborový, webový, tiskový, …  
    * klient  
      * něco žádá  
* podle druhů signálů  
  * analogová  
    * proměnný signál  
    * např. obvody – zesilovač, …  
  * digitální  
    * signál má obvykle fixní počet stavů (např. zapnutý/vypnutý – binární)  
* vlastnictví  
  * veřejná  
    * telekomunikační síť pro přenos dat  
    * provozovatelé se řídí legislativou a nabízí služby veřejnosti  
      * např. připojení dílčích lokálních sítí  
  * privátní  
    * LANy  
    * (rezervovaný rozsah IP adres)  
  * virtuální privátní (VPN)  
    * komunikace je plně šifrována  
    * server poskytovatele slouží jako switch a může sloužit jako koncový bod  
      * koncový bod \= jsou skrz něj směrovány požadavky na Internet  
        * (IP adresa, kterou stránka vidí je pak veřejné IP poskytovatele)  
    * využití:  
      * simulace LANu  
        * můžeme vytvořit virtuální LAN, tím že připojíme zařízení to jedné VPN  
      * anonymita, ochrana soukromí  
        * pokud použijeme poskytovatele, který neuchovává záznamy o používání a anonymizujeme uživatele, nemůže nikdo vědět, co děláme  
      * falšování polohy  
        * některé Internetové služby používají znalosti IP adresy, aby zjistili např. v jaké zemi se koukáte na jejich stránku  
          * tzv. georestrikce  
          * Netflix, ČT, …  
          * nutno podotknout, že pak tyto služby blokují některé IP, když ví, že je to VPN

## Síťová zařízení

### Aktivní síťové prvky

* slouží ke vzájemnému propojení v počítačových sítích  
* aktivně působí na přenášené signály  
* opakovač (repeater)  
  * přijímá zkreslený, zašuměný nebo jinak poškozený signál  
  * opravený, zesílený a správně časovaný ho vysílá dále  
* hub (rozbočovač)  
  * umožňuje rozvětvení sítě (jeden kabel do několika děr)  
  * je zároveň i opakovačem  
* switch  
  * velké množství portů (až stovky)  
  * připojují se na něj zařízení  
* bridge (most)  
  * spojuje dvě části sítě  
  * odděluje segmenty → snižuje zátěž  
* router  
  * přeposílá datagramy směrem k jejich cíli  
  * např. připojení LANu k vysokorychlostní síti

### Pasivní síťové prvky

* kabeláž – optika, …

## Topologie

* tvar/struktura sítě (jak jsou prvky zapojeny)  
* typy:  
  * sběrnicová (bus) – bez rozvrstvení kabelu.,okolo všech (koaxální kabel)  
  * hvězdicová (star) – všechno připojeno k aktivnímu prvky (kroucená dvojlinka)  
  * kruhová (ring) – uzavřené, dva konce  
  * stromová (tree) – propojení hvězdicových, LAN  
  * obecný graf – redundance spojů, WAN  
  * samostatný počítač (virtuální síť) – loopback, …

## Zdroje

* Přispěvatelé Wikipedie, *Počítačová síť* \[online\], Wikipedie: Otevřená encyklopedie, c2025, Datum poslední revize 27\. 11\. 2025, 10:13 UTC, \[citováno 29\. 11\. 2025\] \<[https://cs.wikipedia.org/w/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A1\_s%C3%AD%C5%A5\&oldid=25446803](https://cs.wikipedia.org/w/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A1_s%C3%AD%C5%A5&oldid=25446803)\>  
* Přispěvatelé WikiSkripta, *Počítačové sítě* \[online\], , c2025, Datum poslední revize 10\. 02\. 2025, 09:31 UTC, \[citováno 29\. 11\. 2025\] \<[https://www.wikiskripta.eu/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A9\_s%C3%ADt%C4%9B\&oldid=493847](https://www.wikiskripta.eu/index.php?title=Po%C4%8D%C3%ADta%C4%8Dov%C3%A9_s%C3%ADt%C4%9B&oldid=493847)\>   
* Počítačové sítě (článek) | Internet. In: *Khan Academy* \[online\] \[cit. 29.11.2025\]. Dostupné z: [https://cs.khanacademy.org/computing/informatika-pocitace-a-internet/x8887af37e7f1189a:internet/x8887af37e7f1189a:site-a-jejich-propojovani/a/computer-networks-overview](https://cs.khanacademy.org/computing/informatika-pocitace-a-internet/x8887af37e7f1189a:internet/x8887af37e7f1189a:site-a-jejich-propojovani/a/computer-networks-overview)
* Přispěvatelé Wikipedie, Referenční model ISO/OSI [online], Wikipedie: Otevřená encyklopedie, c2025, Datum poslední revize 10. 09. 2025, 12:15 UTC, [citováno 29. 11. 2025] <https://cs.wikipedia.org/w/index.php?title=Referen%C4%8Dn%C3%AD_model_ISO/OSI&oldid=25202890> 