# Vektory

Stručný popis: Cílem je vytvořit třídu, která implementuje třírozměrný vektor, přetíží
operátor sčítání (sčítání vektorů) a operátor násobení (skalární součin), a implementuje
member funkce skalárního součinu a odchylky vektorů. Nakonec by se tato třída použila pro
vyřešení určité úlohy z analytické geometrie (bude známý postup).

```csharp
class Vector
{
    private readonly double[] _array;

    public Vector(double[] array)
    {
        this._array = array;
    }

    public double[] GetArray()
    {
        return this._array;
    }

    public int GetLength()
    {
        return this._array.Length;
    }

    public double GetMember(int index)
    {
        return this._array[index];
    }

    public static Vector operator +(Vector v1, Vector v2)
    {

        if (v1.GetLength() != v2.GetLength())
        {
            throw new ArgumentException("Vectors must have the same length");
        }

        double[] result = new double[v1.GetLength()];

        for (var i = 0; i < v1.GetLength(); i++)
        {
            result[i] = v1.GetMember(i) + v2.GetMember(i);
        }

        return new Vector(result);
    }

    public static double operator *(Vector v1, Vector v2)
    {
        return v1.ScalarMultiply(v2);
    }

    public double ScalarMultiply(Vector v2)
    {
        if (this.GetLength() != v2.GetLength())
        {
            throw new ArgumentException("Vectors must have the same length");
        }

        double result = 0;

        for (var i = 0; i < this.GetLength(); i++)
        {
            result += this.GetMember(i) * v2.GetMember(i);
        }

        return result;
    }

    public double GetSize()
    {
        double temp = 0;
        for (int i = 0; i < GetLength(); i++)
        {
            temp += this.GetMember(i);
        }

        return Math.Sqrt(temp);
    }

    public double Angle(Vector v2)
    {
        // trojúhelník v podstatě
        return Math.Acos(GetSize() / v2.GetSize());
    }
}
```