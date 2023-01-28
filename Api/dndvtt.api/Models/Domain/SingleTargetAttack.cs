namespace dndvtt.api.Models.Domain
{
    public class SingleTargetAttack
    {
        public int AttackRollModifier { get; set; }
        public Dictionary<string, DiceRollStruct> DamageRoll { get; set; }
    }
}
