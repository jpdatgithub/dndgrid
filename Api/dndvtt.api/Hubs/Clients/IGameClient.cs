using System.Threading.Tasks;
using dndvtt.api.Models.Game;

namespace dndvtt.api.Hubs.Clients
{
    public interface IGameClient
    {
        Task UpdateBoard(UpdateInfo updateinfo);
    }
}
