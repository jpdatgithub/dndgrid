using dndvtt.api.Models.Domain.Interfaces;
using dndvtt.api.Entities.Properties.Interfaces;
using dndvtt.api.Entities.Interfaces;

namespace dndvtt.api.Entities
{
    public class BoardEntity : IBoardEntity
    {
        private Random _random;
        private ISheet _selfSheet;
        private List<IAction> _actions;

        public BoardEntity(ISheet selfSheet) {
            _random = new Random();
            _selfSheet = selfSheet;
        }

        public BoardEntity() { }

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
