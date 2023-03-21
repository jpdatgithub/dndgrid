using dndvtt.api.Models.Domain;

namespace dndvtt.api.Models.Board.Interfaces
{
    public class CharacterToken : IBoardEntity, ICharacterEntity
    {
        public CharacterTokenModel tokenModel { get; set; }
    }
}
