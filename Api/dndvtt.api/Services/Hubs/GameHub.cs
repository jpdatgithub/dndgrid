using dndvtt.api.Services.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Models.TabViewer;
using dndvtt.api.Models.Options;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Database.Interfaces;
using dndvtt.api.Services.Facades;
using dndvtt.api.Models.Chat;

namespace dndvtt.api.Services.Hubs
{
    public class GameHub : Hub<IGameClient>
    {
        private IDBConnector _dbConnector;
        private IGameFacade _gameFacade;

        public GameHub(IDBConnector dBConnector, IGameFacade gameFacade) 
        {
            _dbConnector = dBConnector;
            _gameFacade = gameFacade;
        }
        public override Task OnConnectedAsync()
        {
            Clients.Caller.ReceivePanel(_gameFacade.StartGamePanel());
            Clients.Caller.ReceiveBoard(_gameFacade.getBoardModel());

            return base.OnConnectedAsync();
        }
    }
}