using dndvtt.api.Models.Domain.Interfaces;

namespace dndvtt.api.Entities
{
    public class BoardEntity
    {
        private Random _random;
        private ISheet _selfSheet;

        public BoardEntity(ISheet selfSheet) {
            _random = new Random();
            _selfSheet = selfSheet;
        }

        public int Roll(int dice, int dieAmount)
        {
            int result = 0;

            for (int i = 0; i < dieAmount; i++)
            {
                result += 1 + _random.Next(dice);
            }

            return result;
        }


    }
}
