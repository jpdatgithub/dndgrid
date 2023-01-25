using dndvtt.api.Entities.Interfaces;

namespace dndvtt.api.Services.Interfaces
{
    public interface IDBConnector
    {
        IBoardEntity LoadToken(string tokenId);
    }
}
