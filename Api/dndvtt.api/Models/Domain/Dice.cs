namespace dndvtt.api.Models.Domain
{
    public class Dice
    {
        private readonly int _faces;

        public Dice(int faces)
        {
            _faces = faces;
        }

        public int Roll()
        {
            Random rand = new Random(DateTime.Now.Millisecond);
            return 1 + rand.Next(0, _faces);
        }
    }
}
