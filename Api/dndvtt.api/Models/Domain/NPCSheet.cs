using dndvtt.api.Models.Domain.Interfaces;

namespace dndvtt.api.Models.Domain
{
    public class NPCSheet : ISheet
    {
        public string Name { get; set; }
        public string TokenPicId { get; set; }
        public int HealthPoints { get; set; }
        public List<String> SingleTargetAttackIds { get; set; }
        public Dictionary<string, double> DamageFactors { get; set; }
    }
}
