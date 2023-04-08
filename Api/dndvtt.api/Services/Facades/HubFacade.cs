using dndvtt.api.Models.Chat;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Services.Facades
{
    public class HubFacade
    {
        private readonly IHubContext<GameHub, IGameClient>? _ttmHub;

        public HubFacade(IHubContext<GameHub, IGameClient> ttmHub) 
        {
            _ttmHub = ttmHub;
        }

        public Task SendMessageToAll(ChatMessage message)
        {
            return _ttmHub!.Clients.All.ReceiveMessage(message);
        }
    }
}
