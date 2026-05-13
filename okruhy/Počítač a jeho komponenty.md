# Počítač a jeho komponenty

## Osnova

* úvod  
* základní architektura počítače  
* základní deska (motherboard)  
* procesor  
* operační paměť  
* úložná zařízení  
* grafická karta  
* sběrnice  
* zdroj   
* chlazení  
* vstupní a výstupní zařízení  
* moderní trendy

* Počítač \- **zařízení** určené ke zpracování informací podle předem daného programu  
* **Funguje na principu:** vstup dat \-\> zpracování \-\> výstup výsledků \-\> ukládání dat  
* **Hardware vs software**  
* **informace** v počítači reprezentovány **binárně** (0 a 1\)  
* Moderní počítače vycházejí z tzv. von **Neumannovy architektury** \-\> (program i data uloženy ve stejné paměti)  
* **ZÁKLADNÍ ARCHITEKTURA POČÍTAČE**  
  * procesoru (CPU)  
  * operační paměti (RAM)  
  * úložného zařízení  
  * sběrnic (propojení komponent)  
  * vstupních zařízení  
  * výstupních zařízení  
* **ZÁKLADNÍ DESKA** (Motherboard)  
  * Základní deska **propojuje všechny komponenty**  
  * **Obsahuje:**  
    * patici pro procesor  
    * sloty pro RAM  
    * konektory pro disky  
    * PCIe slot pro grafickou kartu  
    * čipset (řídí komunikaci)  
    * BIOS/UEFI \- spouští hardware při zapnutí (před OS)  
  * Bez základní desky by jednotlivé komponenty nemohly spolupracovat  
* **PROCESOR** (CPU – Central Processing Unit)  
  * **nejdůležitější součást počítače** („mozek počítače“)  
  * postupně **načítá instrukce** z paměti, **dekóduje** je a **vykonává**  
  * **řízení** ostatních komponent  
  * provádění **aritmetických a logických operací**  
  * **Vnitřní části procesoru**  
    * **ŘADIČ** (Control Unit)  
      * řídí tok **instrukcí**  
      * určuje, jaké operace se mají provést  
    * **ALU** (Aritmeticko-logická jednotka)  
      * provádí **matematické operace** (sčítání, násobení)  
      * logické operace (AND, OR, NOT)  
    * **REGISTRY**  
      * velmi malé a velmi rychlé **paměti uvnitř CPU**  
      * uchovávají aktuálně zpracovávaná data  
  * **Důležité parametry CPU**  
    * Frekvence (GHz) \- počet cyklů za sekundu  
    * **Počet jader**  
      * Moderní procesory mají více jader (např. 4, 8, 16\)  
      * Každé jádro může zpracovávat vlastní úlohu  
    * **Vlákna (threads)**  
      * Technologie jako Hyper-Threading umožňují jednomu jádru zpracovávat více vláken  
    * **Cache paměť**  
      * Velmi rychlá paměť uvnitř procesoru  
      * zrychluje **přístup** **k často používaným datům**  
* **OPERAČNÍ PAMĚŤ** (RAM \- Random Access Memory)  
  * pracovní paměť počítače  
  * **Vlastnosti**:  
    * velmi rychlá  
    * data se po vypnutí smažou  
    * ukládá aktuálně spuštěné programy  
  * **Čím více RAM:**  
    * tím lepší multitasking  
    * tím méně dochází ke zpomalování systému  
  * Typy RAM: DDR4, DDR5  
* **ÚLOŽNÁ ZAŘÍZENÍ**  
  * Slouží k dlouhodobému ukládání dat  
  * **HDD** (Hard Disk Drive)  
    * mechanické zařízení  
    * obsahuje rotující plotny  
    * pomalejší  
    * levnější  
  * **SSD** (Solid State Drive)  
    * bez pohyblivých částí  
    * používá flash paměť \- omezený počet zápisů  
    * mnohem rychlejší než HDD  
    * odolnější vůči otřesům  
* **GRAFICKÁ KARTA** (GPU \- Graphics Processing Unit)  
  * specializovaný procesor pro **výpočty grafiky** (tisíce výpočetních jednotek)  
  * **Používá se pro:** zobrazování obrazu, 3D grafiku, hry, video rendering, AI  
  * **Může být:**  
    * **integrovaná** (součást CPU)  
    * **dedikovaná** (samostatná karta)  
* **SBĚRNICE**  
  * Vodiče umožňují přenos dat mezi komponentami (kabely)  
  * Rozlišujeme:  
    * **datovou sběrnici** (přenáší data)  
    * **adresovou sběrnici** (určuje odkud kam se zapisuje)  
    * **řídicí sběrnici** (říká co se má dělat \- čtení, zápis, synchronizace,…)  
  * Rychlost sběrnice ovlivňuje výkon systému (dnes je více sběrnic v jedné)  
* **ZDROJ**  
  * **Napájí** všechny komponenty počítače \- musí mít dostatečný výkon (př. 500W, 750W)  
  * Převádí: **střídavý proud** (230 V) \-\> **stejnosměrné napětí** (12 V, 5 V, 3,3 V)  
* **CHLAZENÍ**  
  * Komponenty produkují teplo \-\> bez správného chlazení **může dojít k přehřátí a poškození**  
  * Používá se:  
    * **vzduchové chlazení** (ventilátory)  
    * **kapalinové chlazení**  
* **VSTUPNÍ ZAŘÍZENÍ** (zadávání dat do počítače)  
  * klávesnice, myš, scanner, mikrofon, webkamera  
* **VÝSTUPNÍ ZAŘÍZENÍ** (zobrazování dat z počítače)  
  * Monitor, tiskárna, reproduktory, sluchátka  
* **MODERNÍ TRENDY**  
  * vícejádrové procesory  
  * miniaturizace  
  * cloud computing  
  * specializované AI čipy  
  * energetická efektivita