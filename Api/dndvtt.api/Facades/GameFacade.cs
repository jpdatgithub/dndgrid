using dndvtt.api.Models.Game;

namespace dndvtt.api.Facades
{
    public class GameFacade : IGameFacade
    {
        // declare state history here, make a constructor for a dummie gamefacade and lets start the testing
        List<BoardModel> _boardHistory = new List<BoardModel>();
        public string lastBoardFileName { get; set; }

        public GameFacade() { 
            lastBoardFileName = string.Empty;
        }
    }
}
