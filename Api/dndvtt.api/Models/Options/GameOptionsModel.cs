namespace dndvtt.api.Models.Options
{
    public class GameOptionsModel
    {
        public string title { get; set; }
        public List<string> children { get; set; }

        public GameOptionsModel(List<string> options, string title) { 
            children = options;
            this.title = title;
        }
    }
}
