using dndvtt.api.Entities.Interfaces;
using dndvtt.api.Models;
using dndvtt.api.Models.Board;

namespace dndvtt.api.Facades.Interfaces
{
    public interface IBoardFacade
    {
        BoardModel AddToken(IBoardEntity token, Position position);
    }
}
