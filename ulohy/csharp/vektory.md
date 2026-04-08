# Vektory

Pomocný text: [Vektory](/ulohy/texty/Vektory.pdf)

## 1. Vytvořte třídu implementující 2D vektor s následujícími vlastnostmi
- Operátor (binární) „+“ přetížen na sčítání vektorů.
- Operátor (binární) „-“ přetížen na odčítání vektorů.
- Operátor (unární) „-“ přetížen tak, aby při použití na vektor vrátil jeho opačný vektor.
- Operátor (binární) „*“ přetížen na součin skaláru a vektoru (v tomto pořadí).
- Operátor (binární) „*“ přetížen na skalární součin vektorů.
- Funkce len(), která vrací délku tohoto vektoru.
- Funkce dev(v), která vrací odchylku tohoto vektoru a zadaného vektoru v.
- Funkce dir(), která vrací vektor jednotkové délky ve směru tohoto vektoru.
- Funkce normal(right) s nepovinným parametrem right, která vrací vektor jednotkové délky, který je kolmý na tento vektor (normálový vektor). Pokud má parametr right hodnotu true (defaultní hodnota), tak tento vektor a jeho normálový vektor tvoří pravotočivou soustavu (normálový vektor je vůči tomuto vektoru otočený v protisměru hodinových ručiček), v opačném případě tvoří levotočivou soustavu.
- Funkce rotate(angle), která vrací vektor, jenž vzniknul otočením tohoto vektoru o úhel angle ve stupních (pozor na správné úhlové jednotky).
- Metodu print(), která přehledně vypíše tento vektor do konzole.
- Statické varianty všech předchozích funkcí a metod (ne operátorů).

```csharp
// Poznámka:
// Jednodušší implementace pomocí dvou souřadnic
// místo arraye, tady zvoleno kvůli původnímu zadání, kde bylo prostě: vektor
// Tohle si můžete obhájit tím, že řeknete, že některé věci platí pro
// vektor s více dimenzema, nebo tak nějak.
class Vector2D
{
    private readonly double[] _array;

    public Vector2D(double[] array)
    {
        if (array.Length != 2)
        {
            throw new ArgumentException("Only 2D vectors are supported");
        }
        this._array = array;
    }

    public Vector2D(double x, double y)
    {
        this._array = [x, y];
    }

    public double[] GetArray()
    {
        return this._array;
    }

    public double GetMember(int index)
    {
        return this._array[index];
    }

    public static Vector2D operator +(Vector2D v1, Vector2D v2)
    {
        double[] result = new double[v1.GetNumberOfMembers()];

        for (var i = 0; i < v1.GetNumberOfMembers(); i++)
        {
            result[i] = v1.GetMember(i) + v2.GetMember(i);
        }

        return new Vector2D(result);
    }

    public static Vector2D operator -(Vector2D v1, Vector2D v2)
    {
        return v1 + v2.MultiplyByScalar(-1d);
    }

    // Skalární součin
    public static double operator *(Vector2D v1, Vector2D v2)
    {
        return v1.ScalarMultiply(v2);
    }

    public static Vector2D operator *(double scalar, Vector2D v)
    {
        return v.MultiplyByScalar(scalar);
    }

    /// Skalární součin
    public double ScalarMultiply(Vector2D v2)
    {
        double result = 0;

        for (var i = 0; i < this.GetNumberOfMembers(); i++)
        {
            result += this.GetMember(i) * v2.GetMember(i);
        }

        return result;
    }

    public Vector2D MultiplyByScalar(double scalar)
    {
        double[] newData = new double[this.GetNumberOfMembers()];
        for (int i = 0; i < GetNumberOfMembers(); i++)
        {
            newData[i] += this.GetMember(i) * scalar;
        }

        return new Vector2D(newData);
    }

    public int GetNumberOfMembers()
    {
        return this._array.Length;
    }

    // Délka vektoru
    public double GetLength()
    {
        double temp = 0;
        for (int i = 0; i < GetNumberOfMembers(); i++)
        {
            temp += Math.Pow(this.GetMember(i), 2);
        }

        return Math.Sqrt(temp);
    }

    // Směr vektoru
    public Vector2D GetDirection()
    {
        return (1 / GetLength()) * this;
    }

    // Odchylka ve stupních
    public double AngleBetween(Vector2D v2)
    {
        return Math.Acos(
            Math.Abs(this * v2) /
            (v2.GetLength() * this.GetLength())
            ) / Math.PI * 180;
    }

    /// <param name="angle">angle in degrees</param>
    public Vector2D Rotate(double angleDeg)
    {
        double rad = angleDeg / 180 * Math.PI;
        double cos = Math.Cos(rad);
        double sin = Math.Sin(rad);

        double x = GetMember(0);
        double y = GetMember(1);

        return new Vector2D(x*cos - y*sin, x*sin + y*cos);
    }

    public Vector2D Normal(bool right = true)
    {
        double x = GetMember(0);
        double y = GetMember(1);

        double[] newData = new double[2];

        if (right)
        {
            newData[0] = -y;
            newData[1] = x;
        } else
        {
            newData[0] = x;
            newData[1] = -y;
        }

        return new Vector2D(newData);
    }

    public override string ToString()
    {
        string str = "(";

        foreach (var item in _array)
        {
            str += item.ToString();
            str += ", ";
        }

        str = str.Substring(0, str.Length - 2);

        str += ")";

        return base.ToString() + str;
    }

    public void PrintToConsole()
    {
        Console.WriteLine(ToString());
    }

    /*
     * Statické varianty
     */

    public static double GetLength(Vector2D vector)
    {
        return vector.GetLength();
    }

    public static double AngleBetween(Vector2D vector1, Vector2D vector2) { 
        return vector1.AngleBetween(vector2); 
    }

    public static Vector2D GetDirection(Vector2D vector)
    {
        return vector.GetDirection();
    }

    public static Vector2D Normal(Vector2D vector, bool right = true)
    {
        return vector.Normal(right);
    }

    public static Vector2D Rotate(Vector2D vector, double angleDeg) {
        return vector.Rotate(angleDeg); 
    }

    public static void PrintToConsole(Vector2D vector)
    {
        vector.PrintToConsole();
    }
}
```

## 2. Pomocí této třídy vytvořte metody
které řeší následující úlohy a jejich formátované výsledky vypíší do konzole. Minimálně jednu z následujících úloh vyřešte pouze pomocí operátorů, statických funkcí a statických metod: Uvažujte tři nekolineární body 𝐴=[0,0], 𝐵=[5,0] a 𝐶=[3,5], vypočtěte:

- Délku úsečky 𝐴𝐵.
- Střed úsečky 𝐴𝐵.
- Zdali je trojúhelník 𝐴𝐵𝐶 pravoúhlý.
- Obsah trojúhelníku 𝐴𝐵𝐶.
- Souřadnice bodů 𝐴′, 𝐵′ a 𝐶′, které vznikly otočením trojúhelníku 𝐴𝐵𝐶 kolem bodu 𝐴 o úhel 90°.

```csharp
 // Body A, B, C
Vector2D A = new Vector2D(0d, 0d);
Vector2D B = new Vector2D(5d, 0d);
Vector2D C = new Vector2D(3d, 5d);

// Vektory
Vector2D AB = B - A;
Vector2D AC = C - A;
Vector2D BC = C - B;

// Délka AB
double lengthAB = Vector2D.GetLength(AB);
Console.WriteLine("Délka AB = {0:0.###}", lengthAB); // Délka AB = 5

// Střed AB
Vector2D stred = A + (0.5d * AB);
Console.WriteLine("Střed: {0}", stred); // Střed: ###.Vector2D(2,5, 0)

// Pravoúhlost - test pomocí skalárního součinu vektorů (s tolerancí)
// Zde by šlo udělat roundování, ale toto je taky možnost (a asi lepší)
double tol = 1e-9;
bool rightAtA = Math.Abs(AB * AC) < tol;
bool rightAtB = Math.Abs(AB * BC) < tol;
bool rightAtC = Math.Abs(AC * BC) < tol;
bool isRight = rightAtA || rightAtB || rightAtC;
Console.WriteLine("Je trojúhelník ABC pravoúhlý? {0}", isRight ? "Ano" : "Ne"); // Je trojúhelník ABC pravoúhlý? Ne

// Obsah trojúhelníku = 0.5 * |AB * AC|
double area = 0.5 * Math.Abs(AB * AC);
Console.WriteLine("Obsah trojúhelníku ABC = {0:0.###}", area); // Obsah trojúhelníku ABC = 7,5

// Otočení trojúhelníku kolem bodu A o 90° (střed A) -- využití normálového vektoru je lepší a přesnější
// Jo a taky jsem měl nějaký problémy s Rotate u bodu B :(
Vector2D Brot = A + Vector2D.Normal(B - A);
Vector2D Crot = A + Vector2D.Normal(C - A);

Console.WriteLine("A' = {0}", A); // A' = ###.Vector2D(0, 0)
Console.WriteLine("B' = {0}", Brot); // B' = ###.Vector2D(0, 5)
Console.WriteLine("C' = {0}", Crot); // C' = ###.Vector2D(-5, 3)
```

![nákres](/assets/vektory.svg)
