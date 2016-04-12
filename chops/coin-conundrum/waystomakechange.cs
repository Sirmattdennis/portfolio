private static int WaysToMakeChange(double rawinput)
        {
            int centTotal = (int)(rawinput * 100);
            int[] combinations = new int[centTotal + 1];
            int[] coinDenom = { 1, 5, 10, 25 }; // Modify, add, or remove any denominations (42-cent coins?)
            combinations[0] = 1;

            // Build an array of length equal to the cent-value of the input money amount (e.g. $12.42 = 1242 elements)
            // Two loops break whole task into lots of tiny easy-to-manage tasks...
            // Loop "i" simply steps through every given denomination.
            // Loop "j" steps each denomination upward through the combinations array and, via looking back in the array,
            // adds/updates the values to reflect the number of possible combinations with that and all previous denominations 

            for (int i = 0; i < coinDenom.Length; i++)
            {
                for (int j = coinDenom[i]; j <= centTotal; j++)
                {
                    combinations[j] += combinations[j - coinDenom[i]];
                }
            }
                        
            return combinations.Last();
        }
