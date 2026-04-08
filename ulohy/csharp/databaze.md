# Databáze v C#

GitHub projekt: [https://github.com/JindrichDvorak/SQLiteCs-Project.git](https://github.com/JindrichDvorak/SQLiteCs-Project.git.)

Vytvořte metodu PrintDataTable(), která přijme výstup funkce Query(),
tedy object typu QueryResult a přehledně jej vykreslí do konzole jako tabulku
(nemusí být ohraničená).

```csharp
    static void PrintDataTable(QueryResult queryResult)
    {
        // Fixed col width for easy formating
        int colW = 20;
        string separator = "|";
        string padding = " ";
        
        string output = separator;


        for (int i = 0; i < queryResult.ColumnCount; i++)
        {
            string th = queryResult.ColumnNames[i] + ": " + queryResult.ColumnDataTypes[i].Name;
            output += PadBoth(th, colW); // ukradnuto z https://stackoverflow.com/questions/17590528/pad-left-pad-right-pad-center-string#17590723
            output += separator;
        }

        int headerLen = output.Length;
        output += "\n";
        // Append horizontal line to separate header
        for (int i = 0; i < headerLen; i++)
        {
            output += "—"; // em–dash (jenom vím jak to napsat na klávesnici, nejsem AI)
        }

        output += "\n";
        
        foreach (var row in queryResult.Rows)
        {
            output += "|";
            foreach (var item in row)
            {
                string itemSafe = item != null ? item.ToString() : nameof(item);
                string td = PadBoth(itemSafe, colW);
                output += td;
                output += separator;
            }

            output += "\n";
        }
        
        Console.WriteLine(output);
    }
```

Vytvořte metodu PrintQueryResult(), která bude mít stejný výstup jako
PrintDataTable(), ale místo objektu typu QueryResult přijímá SQL příkaz
ve formě stringu.

- to jsem skipnul, zvládneš

V již existující databázi csfd.db (jediná tabulka obsahující 100 nejlépe
hodnocených filmů podle ČSFD) určete čistě pomocí SQL „příkazů“ (vypsáním
výsledků do konzole):

- Kolik filmů v databázi má český původ?
- Nejlépe hodnocený český film v této databázi.
- Nejhůře hodnocený český film v této databázi.
- Názvy a roky vydání všech filmů v této databázi, ve kterých hraje herec Christian Bale.

```csharp
Database db = new Database("csfd.db");

PrintDataTable(db.Query("SELECT * FROM movies WHERE country LIKE 'Česko%'")); // Technicky vzato Česko jsou tam jenom Pelíšky, ale oni nechtějí jenom Pelíšky, ale i Československo :D
PrintDataTable(db.Query("SELECT *, COUNT(1) FROM movies WHERE country LIKE 'Česko%' ORDER BY rating")); // Pelíšky
PrintDataTable(db.Query("SELECT *, COUNT(1) FROM (SELECT * FROM movies WHERE country LIKE 'Česko%' ORDER BY rating ASC)")); // Byl jednou jeden král... a ano, tohle je divnej postup
PrintDataTable(db.Query("SELECT title, year FROM movies WHERE actors LIKE '%Christian Bale%'")); 
/*
* Temný rytíř	2008
Le Mans '66	2019
Dokonalý trik	2006
*/
```

Založte novou databázi, ve které následně pomocí SQL „příkazů“ vytvoříte dvě
navzájem propojené tabulky (název tabulky: 1. sloupec; … ; N-tý sloupec):

- Autor: id; jméno; rok narození.
- Kniha: id; název; id autora; rok vydání; žánr.
```csharp
Database nova = new Database("Petro_Pascal<3.db");

nova.NonQuery("PRAGMA foreign_keys = ON;");

nova.NonQuery("""
                CREATE TABLE IF NOT EXISTS autor
                (
                    id           INTEGER PRIMARY KEY AUTOINCREMENT,
                    jmeno        TEXT NOT NULL,
                    rok_narozeni INTEGER
                );
                """);
        
nova.NonQuery("""
                CREATE TABLE IF NOT EXISTS kniha
                (
                    id         INTEGER PRIMARY KEY AUTOINCREMENT,
                    nazev      TEXT    NOT NULL,
                    id_autor   INTEGER NOT NULL,
                    rok_vydani INTEGER,
                    zanr       TEXT,
                    FOREIGN KEY (id_autor) REFERENCES autor (id) ON DELETE CASCADE ON UPDATE CASCADE
                );
                """);

```

Do nově vzniklé databáze vložte alespoň tři autory, přičemž každému autorovi
přidejte alespoň dvě knihy (můžete se inspirovat seznamem v PDFku).


```csharp
nova.NonQuery("""
                INSERT INTO autor (jmeno, rok_narozeni) VALUES ('J. R. R. Tolkien', 1892);
                INSERT INTO autor (jmeno, rok_narozeni) VALUES ('Daniel Abraham', 1969);
                INSERT INTO autor (jmeno, rok_narozeni) VALUES ('Brandon Sanderson', 1975);
                """);
                
// Zjisti si ID autorů sám :D. Jsem línej to opakovat konstantně
if (idTolkien != -1)
{
    nova.NonQuery($"""
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("The Hobbit")}', {idTolkien}, 1937, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("LotR: The Fellowship of the Ring")}', {idTolkien}, 1954, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("LotR: The Two Towers")}', {idTolkien}, 1954, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("LotR: The Return of the King")}', {idTolkien}, 1955, 'fantasy');
                    """);
}

if (idAbraham != -1)
{
    nova.NonQuery($"""
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Leviathan Wakes")}', {idAbraham}, 2011, 'sci-fi');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Caliban's War")}', {idAbraham}, 2012, 'sci-fi');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Abaddon's Gate")}', {idAbraham}, 2013, 'sci-fi');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Cibola Burn")}', {idAbraham}, 2014, 'sci-fi');
                    """);
}

if (idSanderson != -1)
{
    nova.NonQuery($"""
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("The Way of Kings")}', {idSanderson}, 2010, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Words of Radiance")}', {idSanderson}, 2014, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Oathbringer")}', {idSanderson}, 2017, 'fantasy');
                    INSERT INTO kniha (nazev, id_autor, rok_vydani, zanr) VALUES ('{("Rythm of War")}', {idSanderson}, 2020, 'fantasy');
                    """);
}
```

V této databázi následně určete čistě pomocí SQL „příkazů“ (vypsáním výsledků do
konzole):

- Tabulku, která bude obsahovat veškerá data z obou tabulek.
- Tabulku ve tvaru (sloupce): jméno autora; počet knih náležících danému autorovi v knihovně.
- Tabulku ve tvaru (sloupce): jméno autora; rok vydání jeho nejstaršího díla; rok vydání jeho nejnovějšího díla

```csharp
// Vypiš všechny údaje z obou tabulek (autor + jeho knihy)
PrintDataTable(nova.Query("""
SELECT a.jmeno AS Autor, k.id AS KnihaId, k.nazev AS Nazev, k.rok_vydani AS RokVydani, k.zanr AS Zanr
FROM autor a
LEFT JOIN kniha k ON k.id_autor = a.id
ORDER BY a.jmeno, k.rok_vydani;
"""));
        
// Vypiš jméno autora a počet knih náležících danému autorovi
PrintDataTable(nova.Query("""
SELECT a.jmeno AS Autor, COUNT(k.id) AS PocetKnih
FROM autor a
LEFT JOIN kniha k ON k.id_autor = a.id
GROUP BY a.id, a.jmeno
ORDER BY a.jmeno;
"""));
        
// Vypiš jméno autora; rok vydání jeho nejstaršího díla; rok vydání jeho nejnovějšího díla
PrintDataTable(nova.Query("""
SELECT a.jmeno AS Autor, MIN(k.rok_vydani) AS NejstarsiRok, MAX(k.rok_vydani) AS NejnovyjsiRok
FROM autor a
LEFT JOIN kniha k ON k.id_autor = a.id
GROUP BY a.id, a.jmeno
ORDER BY a.jmeno;
"""));
```
