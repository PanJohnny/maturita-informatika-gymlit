# Vektory

Stručný popis: Cílem je vytvořit třídu, která implementuje třírozměrný vektor, přetíží
operátor sčítání (sčítání vektorů) a operátor násobení (skalární součin), a implementuje
member funkce skalárního součinu a odchylky vektorů. Nakonec by se tato třída použila pro
vyřešení určité úlohy z analytické geometrie (bude známý postup).

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
        foreach (double v in _array)
        {
            newData[0] = scalar * v;
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

        double[] newData = {
            x*cos - y*sin,
            x*sin + y*cos
        };

        return new Vector2D(newData);
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

    public void PrintToConsole()
    {
        string str = "(";

        foreach (var item in _array)
        {
            str += item.ToString();
            str += ", ";
        }

        str = str.Substring(0, str.Length - 2);

        str += ")";

        Console.WriteLine(str);
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
Vector2D baVec = new Vector2D([5d - 0d, 0d - 0d]);
Vector2D cbVec = new Vector2D([3d - 5d, 5d - 0d]);
Vector2D acVec = new Vector2D([0d - 3d, 0d - 5d]);

Console.WriteLine("Délka AB = {0}", Vector2D.GetLength(baVec));
Console.WriteLine("Střed AB = {0}", 0.5*baVec);
Console.WriteLine("Trojúhelník pravoúhlý ABC {0}",
    Vector2D.AngleBetween(baVec, cbVec) == 90 ||
    Vector2D.AngleBetween(cbVec, acVec) == 90 ||
    Vector2D.AngleBetween(acVec, baVec) == 90
    );
```