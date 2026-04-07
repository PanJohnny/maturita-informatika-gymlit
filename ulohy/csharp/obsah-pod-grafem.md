# Výpočet obsahu plochy pod grafem funkce

**Pracovní úkoly:**
1. Vytvořte funkci integral(f, a, b, n):
   - Vstupy:
     - f … funkce (jedná se o klasickou funkci v C#). 
     - a … reálné číslo (menší než b). 
     - b … reálné číslo (větší než a). 
     - n … počet dělení intervalu od a do b. 
   - Výstup: obsah plochy pod grafem funkce f na intervalu (a, b), který vznikne aproximací této plochy celkem n obdélníky.
2. Vytvořte funkci, která porovná výstup funkce integral() s přesně matematickým výsledkem pro konstantní a lineární funkce f.

```csharp
// Definice nějaké funkce
double Linear(double x)
{
    return -4*x + 10;
}

// Úkol 1
double Integral(Func<double, double> f, double a, double b, double n)
{
    double step = (b - a) / n;
    double sum = 0;
    for (double x = a; x < b; x += step)
    {
        double y = f(x);
        
        // plocha obdelníku
        sum += y * step;
    }

    return sum;
}

// Úkol 2
double CalculateDiffWithExactLinear(Func<double, double> f, double a, double b, double n)
{
    double lichobezník = (f(a) + f(b)) / 2 * (b - a);
    double integral = Integral(f, a, b, n);

    return integral / lichobezník;
}

// Test
Console.WriteLine("Integral for y = -4x + 10 is {0}", Integral(Linear, 0, 100, 100)); // Integral for y = -4x + 10 is -18800
Console.WriteLine("Integral / exact for y = -4x + 10 is {0}", CalculateDiffWithExactLinear(Linear, 0, 100, 100)); // Integral / exact for y = -4x + 10 is 0,9894736842105263
```