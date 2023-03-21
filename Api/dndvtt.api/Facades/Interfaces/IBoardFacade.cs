using dndvtt.api.Models.Board;
using dndvtt.api.Models.Board.Interfaces;

namespace dndvtt.api.Facades.Interfaces
{
    public interface IBoardFacade
    {
        BoardModel AddToken(IBoardEntity token, Position position);
        BoardModel Refresh();
    }
}
