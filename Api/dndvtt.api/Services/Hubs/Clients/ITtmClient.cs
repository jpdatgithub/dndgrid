using System.Threading.Tasks;
using dndvtt.api.Models.Chat;
using dndvtt.api.Models.NavOptions;
using dndvtt.api.Models.TabViewer;

namespace dndvtt.api.Services.Hubs.Clients
{
    public interface ITtmClient
    {
        Task ReceiveMessage(ChatMessage message);
        Task ReceivePanel(TabViewerModel<NavOptionsModel> panel);
    }
}