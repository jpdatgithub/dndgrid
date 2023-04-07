using dndvtt.api.Models.Chat;
using dndvtt.api.Models.Options;

namespace dndvtt.api.Services.Facades.Interfaces
{
    public interface IGameFacade
    {
        public Task SendMessageToAll(ChatMessage message);

        public GameOptionsModel StartGamePanel();
    }
}
