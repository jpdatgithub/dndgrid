namespace dndvtt.api.Models.NavOptions
{
    public class NavOptionsModel
    {
        public string title { get; set; }
        public List<string> children { get; set; }

        public NavOptionsModel(List<string> options, string title) { 
            children = options;
            this.title = title;
        }
    }
}
