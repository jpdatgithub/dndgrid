using dndvtt.api.Models.Chat;
using dndvtt.api.Models.Options;
using dndvtt.api.Models.TabViewer;

namespace dndvtt.api.Services.Facades.Interfaces
{
    public interface IGameFacade
    {
        public TabViewerModel<GameOptionsModel> StartGamePanel();
    }
}
