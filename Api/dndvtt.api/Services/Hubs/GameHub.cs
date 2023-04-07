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

        public GameHub(IDBConnector dBConnector) 
        {
            _dbConnector = dBConnector;
        }
        public override Task OnConnectedAsync()
        {
            // Perform any initialization or setup here
            // This code will run when a client connects to the hub
            // You can use the Context property to access information about the connected client
            // By chatgpt
            List<string> options = new List<string>() {"option1", "option2", "option3"};
            List<bool> shadows = new List<bool>() {true, false, false, true, false, true, true, false };

            List<GameOptionsModel> navOptions = new List<GameOptionsModel>() {new GameOptionsModel(options, "title")};

            TabViewerModel<GameOptionsModel> panel = new TabViewerModel<GameOptionsModel>(navOptions, shadows, "mainPanel");

            return base.OnConnectedAsync();
        }

        public async Task SendMessageToAll(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
        }
    }
}