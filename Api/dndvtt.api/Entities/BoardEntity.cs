using dndvtt.api.Models.Domain.Interfaces;
using dndvtt.api.Entities.Properties.Interfaces;
using dndvtt.api.Entities.Interfaces;
using dndvtt.api.Models.Domain;

namespace dndvtt.api.Entities
{
    public class BoardEntity : IBoardEntity
    {
        private Random _random;
        private ISheet _selfSheet;
        private List<SingleTargetAttack>? _sats;

        public BoardEntity(ISheet selfSheet) {
            _random = new Random();
            _selfSheet = selfSheet;

            // load, initially, single target attacks from db
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
