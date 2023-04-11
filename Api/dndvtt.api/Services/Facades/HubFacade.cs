using dndvtt.api.Models.Chat;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Services.Facades
{
    public class HubFacade
    {
        private readonly IHubContext<GameHub, IGameClient>? _gameHub;

        public HubFacade(IHubContext<GameHub, IGameClient> gameHub) 
        {
            _gameHub = gameHub;
        }

        public Task SendMessageToAll(ChatMessage message)
        {
            return _gameHub!.Clients.All.ReceiveMessage(message);
        }
    }
}
