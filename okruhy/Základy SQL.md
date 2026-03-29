# Základy SQL

## Osnova

* Co to je SQL?  
* Historie  
* Základní syntaxe  
  * SELECT  
  * CREATE  
  * UPDATE  
  * DELETE  
  * INSERT

## Co to je SQL?

* *Structured Query Language*  
* jazyk pomocí kterého se můžeme databáze dotazovat na data  
* můžeme i vytvářet nové položky, tabulky atp.  
* databáze mají bězně i uživatele, kteří mají různé přístupy k jednotlivým tabulkám, databázím, …  
  * bezpečnostní  
  * oprávnění: čtení, psaní, správa (tvoření a úprava, …) – záleží na systému  
* jazyk využívají databáze jako MySQL, PostgreSQL, …  
* je deklarativní, tzn. jenom říká co se se más stát, ale ty akce pak musí vykonat ten program samotný  
* používá se pro SQL databáze, a to relačního typu

## Historie

* navrženo na začátku 70\. let a rozvoj přes tuto dekádu  
* až přelom 80.- 90\. let proběhla standardizace

## Základní syntaxe

* nejdřív musíme vědět co chceme dělat?  
  * vybrat nějaká data?  
    * SELECT  
  * odstranit nějaký záznam?  
    * DELETE  
  * přepsat nějaký záznam (upravit v něm nějakou vlastnost)?  
    * UPDATE  
  * vložit nový záznam do tabulky?  
    * INSERT  
  * vytvořit něco v databázi?  
    * vytvořit novou tabulku?  
      * CREATE TABLE  
    * …

### Vytvoření tabulky

* definují se sloupce

CREATE TABLE \[databáze.\]název (  
	vlastnost datový\_typ omezení,  
	…  
)  
příklad:

CREATE TABLE users (  
	userid number AUTOINCREMENT NOT NULL,  
	jmeno text NOT NULL,  
	email text NOT NULL,  
	…  
)

### Získání dat SELECT

SELECT sloupec1, sloupec2, … FROM tabulka

SELECT id, jmeno, email FROM users

SELECT sloupec1, sloupec2, … FROM tabulka  
WHERE podmínka

SELECT jmeno, id, email FROM users  
WHERE jmeno \= 'Otokar Březina'

SELECT sloupec1, sloupec2, … FROM tabulka  
JOIN tabulka2 ON podmínka

SELECT id\_typu\_plodu, jmeno, typy.nazev FROM ovoce  
JOIN typy ON typy.id \= ovoce.id\_typu

### Odstranění záznamu DELETE

DELETE FROM tabulka WHERE podmínka;

DELETE FROM users WHERE id=85;

**Varování**: pokud není uvedena podmínka, tak smaže všechna data z tabulky.

* pro mazání z tabulky se pak používá DROP

### Upravení záznamu UPDATE

UPDATE tabulka SET sloupec1 \= hodnota1, sloupec2 \= hodnota2, ... WHERE podmínka;

UPDATE users SET admin=1 WHERE id=85;

**Varování**: pokud není uvedena podmínka, tak upraví všechny řádky

### Vložení záznamu (vytvoření) INSERT

INSERT INTO tabulka (sloupec1, sloupec2, ...) VALUES (hodnota1, hodnota2, ...);

INSERT INTO users (name, email) VALUES ('Ivan', 'ivan@example.com');

## Zdroje

* SQL. In: *Wikipedie* \[online\]. 2025 \[cit. 29.03.2026\]. Dostupné z: [https://cs.wikipedia.org/w/index.php?title=SQL\&oldid=25479485](https://cs.wikipedia.org/w/index.php?title=SQL&oldid=25479485)  
* SQL Tutorial. In: \[cit. 29.03.2026\]. Dostupné z: [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)