using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Hubs;
using dndvtt.api.Hubs.Clients;
using dndvtt.api.Models.Chat;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Facades
{
    public class TtmFacade : ITtmFacade
    {
        private readonly IHubContext<TtmHub, ITtmClient>? _ttmHub;
        private IGameFacade? _gameFacade;

        public TtmFacade(IHubContext<TtmHub, ITtmClient> ttmHub, IGameFacade gameFacade)
        {
            _gameFacade = gameFacade;
            _ttmHub = ttmHub;
        }

        public async Task SendMessageToAll(ChatMessage message)
        {
            await _ttmHub!.Clients.All.ReceiveMessage(message);
        }
    }
}
