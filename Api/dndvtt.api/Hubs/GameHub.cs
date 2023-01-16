using dndvtt.api.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Hubs
{
    public class GameHub : Hub<IGameClient>
    {
    }
}
