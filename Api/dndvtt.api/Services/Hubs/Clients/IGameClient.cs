using System.Threading.Tasks;
using dndvtt.api.Models.Board;
using dndvtt.api.Models.Chat;
using dndvtt.api.Models.Options;
using dndvtt.api.Models.TabViewer;

namespace dndvtt.api.Services.Hubs.Clients
{
    public interface IGameClient
    {
        Task ReceiveMessage(ChatMessage message);
        Task ReceivePanel(TabViewerModel<GameOptionsModel> panel);
        Task ReceiveBoard(BoardModel board);
        public Task SendMessageToAll(ChatMessage message);
    }
}