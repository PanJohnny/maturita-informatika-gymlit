# Aproximace ludolfova čísla

## 1. Úkol
Vytvořte celkem 2 funkce s jediným vstupním parametrem N, jejichž výstupem bude aproximace čísla π určená pomocí součtu prvních N prvků následujících posloupností:
1. Eulerova $a_1 = 1, a_n = \frac{1}{n^2} \to \frac{n^2}{6} = \sum^{\infty}_{n=1}{a_n}$

```csharp
double Euler(int n)
{
    double a1 = 1;
    double sum = a1;
    for (int i = 2; i < n; i++)
    {
        double ai = Math.Pow(i, -2);
        sum += ai;
    }

    // pi^2 / 6 = sum
    return Math.Sqrt(sum * 6);
}

Console.WriteLine("Euler for n = {1}: {0}", Euler(repetitions), repetitions);
```

2. Ludolfova