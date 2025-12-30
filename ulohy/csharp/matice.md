# Matice

Stručný popis: Cílem je vytvořit třídu, která implementuje matici o rozměrech 𝑚 × 𝑛,
přetíží operátor sčítání (sčítání matic) a operátor násobení (násobení matic) a implementuje
funkce výpočtu „trace“ (součet prvků na diagonále) a „transpozice“ (prohození řádků a
sloupců). Nakonec by se tato třída použila pro vyřešení určité matematické úlohy (bude
známý postup).

```csharp
class Matrix
{
    private readonly double[,] _array;
    public Matrix(int w, int h, double[] nums)
    {
        if (nums.Length != w * h)
        {
            throw new ArgumentException("You must provide all matrices");
        }
        
        this._array = new  double[w, h];

        for (int iH = 0; iH < h; iH++)
        {
            for (int iW = 0; iW < w; iW++)
            {
                this._array[iW, iH] = nums[iH * w + iW]; 
            }
        }
    }

    public Matrix(double[,] array)
    {
        this._array = array;
    }

    public int GetWidth()
    {
        return this._array.GetLength(0);
    }

    public int GetHeight()
    {
        return this._array.GetLength(1);
    }

    public double[,] GetArray()
    {
        return _array;
    }

    public double GetNum(int x, int y)
    {
        return this._array[x, y];
    }

    public double GetNumOrDefault(int x, int y, double defaultValue)
    {
        if (x >= GetWidth() || y >= GetHeight())
            return defaultValue;

        return GetNum(x, y);
    }

    public double Trace()
    {
        if (GetWidth() != GetHeight())
        {
            throw new InvalidOperationException("Cannot run trace on non-square matrix");
        }

        double sum = 0;

        for (int i = 0; i < GetWidth(); i++)
        {
            sum += GetNum(i, i);
        }

        return sum;
    }

    public Matrix Transpose()
    {
        double[,] result = new double[GetHeight(), GetWidth()];
        // Transpose = to swap lines and columns
        for (int iW = 0; iW < GetWidth(); iW++)
        {
            for (int iH = 0; iH < GetHeight(); iH++)
            {
                result[iH, iW] = GetNum(iW, iH);
            }
        }

        return new Matrix(result);
    }
    
    public static Matrix operator +(Matrix m1, Matrix m2)
    {
        int maxWidth = Math.Max(m1.GetWidth(), m2.GetWidth());
        int maxHeight = Math.Max(m1.GetHeight(), m2.GetHeight());

        double[,] result = new double[maxWidth, maxHeight];
        for (int iH = 0; iH < maxHeight; iH++)
        {
            for (int iW = 0; iW < maxWidth; iW++)
            {
                result[iW, iH] = m1.GetNumOrDefault(iW, iH, 0) + m2.GetNumOrDefault(iW, iH, 0);
            }
        }

        return new Matrix(result);
    }
}
```