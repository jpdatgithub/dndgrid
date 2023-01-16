namespace dndvtt.api.Models.Game
{
    public class CellModel
    {
        public string? _value { get; set; }
        public string? key { get; set; }

        public CellModel(string value, string boardKey, int index) {
            _value = value;
            key = (boardKey + index).ToString();
        }
    }
}
