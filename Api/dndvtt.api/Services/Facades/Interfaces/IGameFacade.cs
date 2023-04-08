using dndvtt.api.Models.Board;
using dndvtt.api.Models.Options;
using dndvtt.api.Models.TabViewer;

namespace dndvtt.api.Services.Facades.Interfaces
{
    public interface IGameFacade
    {
        public TabViewerModel<GameOptionsModel> StartGamePanel();
        public BoardModel getBoardModel();
    }
}
