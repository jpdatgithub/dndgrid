using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Models.TabViewer;
using dndvtt.api.Models.Options;
using System.Text.Json;

namespace dndvtt.api.Services.Facades
{
    public class GameFacade : IGameFacade
    {
        private Dictionary<string, List<string>> _options;

        public GameFacade()
        {
            // initialize options dictionary
            string jsonString = File.ReadAllText("../../Api/dndvtt.api/Jsons/options.json");
            _options = JsonSerializer.Deserialize<Dictionary<string, List<string>>>(jsonString)!;
        }

        public TabViewerModel<GameOptionsModel> StartGamePanel()
        {
            var playerOptionsTab = new GameOptionsModel(new List<string>(_options["PlayerHand"]), "Player Hand");
            var tabListForTabViewer = new List<GameOptionsModel>() { playerOptionsTab };
            return new TabViewerModel<GameOptionsModel>(tabListForTabViewer, "mainPanel");
        }
    }
}
