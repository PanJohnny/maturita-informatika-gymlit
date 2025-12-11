# Aproximace ludolfova čísla

## 1. Úkol

Vytvořte celkem 2 funkce s jediným vstupním parametrem N, jejichž výstupem bude aproximace čísla π určená pomocí součtu prvních N prvků následujících posloupností:

### Eulerova

$a_1 = 1, a_n = \frac{1}{n^2} \to \frac{n^2}{6} = \sum^{\infty}_{n=1}{a_n}$

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

### Ludolfova

$a_1 = 1, a_n = \frac{(-1)^{n-1}}{2n-1} \to \frac{\pi}{4} = \sum^{\infty}_{n=1}{a_n}$

```csharp
double Leibniz(int n)
{
    double a1 = 1;
    double sum = a1;

    for (int i = 2; i < n; i++)
    {
        double ai = Math.Pow(-1, i - 1) / (2 * i - 1);
        sum += ai;
    }

    // pi/4 = sum
    return sum * 4;
}

Console.WriteLine("Leibniz for n = {1}: {0}", Leibniz(repetitions), repetitions);
```

## 2. Úkol

Vytvořte funkci s jediným vstupním parametrem N, jejímž výstupem bude aproximace čísla π určená součinem prvních N členů následující rekurentní posloupností:

### Viétova

$a_1 = \sqrt{\frac{1}{2}}, a_n = \sqrt{\frac{1}{2} + \frac{1}{2} \sqrt{a_{n-1}}} \to \frac{2}{\pi} = \prod_{n=1}^{\infty} a_n$

```csharp
double Viete(int n)
{
    double a1 = Math.Sqrt(.5);

    double value = a1;
    
    // a_{n-1}
    double last = a1;
    for (int i = 2; i < n; i++)
    {
        double an = Math.Sqrt(.5 + .5 * Math.Sqrt(last));
        value *= an;
        last = an;
    }
    
    // 2 / pi = value => value * pi = 2 => pi = 2 / value
    return 2 / value;
}

Console.WriteLine("Viete for n = {1}: {0}", Viete(repetitions), repetitions);
```

## 3. Úkol

Vytvořte funkci, která seřadí tyto tři různé aproximace čísla π podle rychlosti jejich konvergence pro danou požadovanou přesnost. Jedná se o matematickou konvergenci, takže nejrychleji konverguje ta aproximace, která dosáhne požadované přesnosti pro nejmenší N. 

```csharp
// seřazení podle rychlosti konvergence
void RateOnConvergence(double accuracy)
{
    Console.WriteLine("Methods ordered by convergence speed for accuracy {0}:", accuracy);
    int maxRepetitions = repetitions;
    
    // ten list pak uchová i pořadí, můžeme ho vrátit
    // v této ukázce logujeme pořadí do konzole
    List<string> orderedMethods = [];
    
    for (int i = 1; i < maxRepetitions && orderedMethods.Count != 3; i++)
    {
        double distanceEuler = Math.Abs(Math.PI - Euler(i));
        double distanceLeibniz = Math.Abs(Math.PI - Leibniz(i));
        double distanceViete  = Math.Abs(Math.PI - Viete(i));
        
        if (distanceEuler < accuracy && !orderedMethods.Contains("Euler"))
        {
            orderedMethods.Add("Euler");
            Console.WriteLine("{0}. Euler", orderedMethods.Count);
        } else if (distanceLeibniz < accuracy && !orderedMethods.Contains("Leibniz"))
        {
            orderedMethods.Add("Leibniz");
            Console.WriteLine("{0}. Leibniz", orderedMethods.Count);
        } else if (distanceViete < accuracy && !orderedMethods.Contains("Viete"))
        {
            orderedMethods.Add("Viete");
            Console.WriteLine("{0}. Viete", orderedMethods.Count);
        }
    }
}

RateOnConvergence(0.2);
```