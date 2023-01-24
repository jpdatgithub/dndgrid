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
        private IBoardFacade? _boardFacade;
        private IChatFacade? _chatFacade;
        private IToolsFacade? _toolsFacade;
        private IPanelFacade? _panelFacade;

        public TtmFacade(IHubContext<TtmHub, ITtmClient> ttmHub, IBoardFacade boardFacade, IChatFacade chatFacade, IToolsFacade toolsFacade, IPanelFacade panelFacade)
        {
            _boardFacade = boardFacade;
            _chatFacade = chatFacade;
            _toolsFacade = toolsFacade;
            _panelFacade = panelFacade;
            _ttmHub = ttmHub;
        }

        public async Task SendMessageToAll(ChatMessage message)
        {
            await _ttmHub!.Clients.All.ReceiveMessage(message);
        }
    }
}
