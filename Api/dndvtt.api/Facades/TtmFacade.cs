using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Entities.Interfaces;
using dndvtt.api.Entities.Properties.Interfaces;
using dndvtt.api.Hubs;
using dndvtt.api.Hubs.Clients;
using dndvtt.api.Models.Chat;
using dndvtt.api.Models;
using dndvtt.api.Models.Board;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Services.Interfaces;

namespace dndvtt.api.Facades
{
    public class TtmFacade : ITtmFacade
    {
        private readonly IHubContext<TtmHub, ITtmClient>? _ttmHub;
        private IDBConnector _dbConnector;
        private IBoardFacade _boardFacade;
        private IChatFacade _chatFacade;
        private IToolsFacade _toolsFacade;
        private IPanelFacade _panelFacade;

        public TtmFacade(IHubContext<TtmHub, ITtmClient> ttmHub, IBoardFacade boardFacade, IChatFacade chatFacade, IToolsFacade toolsFacade, IPanelFacade panelFacade, IDBConnector dBConnector)
        {
            _boardFacade = boardFacade;
            _chatFacade = chatFacade;
            _toolsFacade = toolsFacade;
            _panelFacade = panelFacade;
            _ttmHub = ttmHub;
            _dbConnector = dBConnector;
        }

        public async Task SendMessageToAll(ChatMessage message)
        {
            await _ttmHub!.Clients.All.ReceiveMessage(message);
        }

        public async Task AddToken(string tokenId, Position position)
        {
            BoardModel updatedBoard = _boardFacade.AddToken(_dbConnector.LoadToken(tokenId), position);

            //gotta send it to clients after
        }
    }
}
