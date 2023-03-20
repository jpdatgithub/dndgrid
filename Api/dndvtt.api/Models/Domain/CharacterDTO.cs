namespace dndvtt.api.Models.Domain
{
    public class CharacterDTO
    {
        public Dictionary<Hability, int> HabilityValues { get; set; }
        public Dictionary<Skill, ProficiencyLevel> SkillProficiencies { get; set; }
        public List<Class> ClassLevels { get; set; }
    }
}
