using dndvtt.api.Models.Board.Interfaces;

namespace dndvtt.api.Models.Board
{
    public class CellModel
    {
        public IBoardEntity? Occupant { get; set; }

        public CellModel()
        {
            Occupant = null;
        }
    }
}
