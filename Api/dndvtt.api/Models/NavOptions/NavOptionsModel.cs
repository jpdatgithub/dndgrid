namespace dndvtt.api.Models.NavOptions
{
    public class NavOptionsModel
    {
        public string title { get; set; }
        public List<string> options { get; set; }

        public NavOptionsModel(List<string> options, string title) { 
            this.options = options;
            this.title = title;
        }
    }
}
