namespace dndvtt.api.Models.Domain
{
    public class CharacterSheet
    {
        public Dictionary<Hability, int> HabilityValues { get; set; }
        public Dictionary<Hability, bool> SavingThrows { get; set; }
        public Dictionary<Skill, ProficiencyLevel> SkillProficiencies { get; set; }
    }
}
