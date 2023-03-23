using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Models.Chat;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;

namespace dndvtt.api.Services.Facades
{
    public class TtmFacade : ITtmFacade
    {
        private readonly IHubContext<TtmHub, ITtmClient>? _ttmHub;

        public TtmFacade(IHubContext<TtmHub, ITtmClient> ttmHub)
        {
            _ttmHub = ttmHub;
        }

        public async Task SendMessageToAll(ChatMessage message)
        {
            await _ttmHub!.Clients.All.ReceiveMessage(message);
        }
    }
}
