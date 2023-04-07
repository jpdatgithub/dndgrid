namespace dndvtt.api.Models.Domain
{
    public class CharacterTokenModel
    {
        public CharacterSheet CharacterCore { get; set; }
        public string CharacterName { get; set; }
        public Dictionary<Hability, bool> SavingThrows { get; set; }
        public int MaximumHP { get; set; }
        public List<ItemModel> Inventory { get; set; }
    }
}
