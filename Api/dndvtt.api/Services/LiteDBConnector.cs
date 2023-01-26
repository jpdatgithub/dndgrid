using LiteDB.Engine;
using LiteDB;
using dndvtt.api.Services.Interfaces;
using dndvtt.api.Entities.Interfaces;
using dndvtt.api.Entities;

namespace dndvtt.api.Services
{
    public class LiteDBConnector : IDBConnector
    {
        public LiteDBConnector() { }

        public IBoardEntity LoadToken(string tokenId)
        {
            return new BoardEntity();
        }
    }
}
