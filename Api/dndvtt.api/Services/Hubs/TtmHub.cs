using dndvtt.api.Services.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Models.TabViewer;
using dndvtt.api.Models.NavOptions;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Database.Interfaces;

namespace dndvtt.api.Services.Hubs
{
    public class TtmHub : Hub<ITtmClient>
    {
        private IDBConnector _dbConnector;

        public TtmHub(IDBConnector dBConnector) 
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

            List<NavOptionsModel> navOptions = new List<NavOptionsModel>() {new NavOptionsModel(options, "title")};

            TabViewerModel<NavOptionsModel> panel = new TabViewerModel<NavOptionsModel>(navOptions, shadows, "mainPanel");

            Clients.Caller.ReceivePanel(panel);

            return base.OnConnectedAsync();
        }
    }
}