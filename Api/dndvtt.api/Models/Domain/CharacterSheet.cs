namespace dndvtt.api.Models.Domain
{
    public class CharacterSheet
    {
        public string Name { get; set; }
        public int ArmorClass { get; set; }
        public Dictionary<Movement, int> Speeds { get; set; }
        public Dictionary<DamageType, bool> DamageResistances { get; set; }
        public Dictionary<DamageType, bool> DamageImmunities { get; set; }
        public Dictionary<Condition, bool> ConditionImmunities { get; set; }
        public Dictionary<Sense, int> Senses { get; set; }
        public Dictionary<int, int> HitDie { get; set; }
        public Dictionary<Hability, int> HabilityValues { get; set; }
        public Dictionary<Hability, bool> SavingThrows { get; set; }
        public Dictionary<Skill, ProficiencyLevel> SkillProficiencies { get; set; }
    }
}
