namespace dndvtt.api.Models.Domain
{
    public struct DiceRollStruct
    {
        public int Amount { get; set; }
        public int Range { get; set; }

        public DiceRollStruct(int amt, int sideAmt) { 
            Amount = amt;
            Range = sideAmt;
        }
    }
}
