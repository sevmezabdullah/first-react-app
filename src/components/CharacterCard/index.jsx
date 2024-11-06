

/**
 * CharacterCard component
 * @param {Object} character - character object
 * @returns {ReactElement} - CharacterCard component
 */
const CharacterCard = ({ character }) => {
    return (
        <div style={{
            alignItems: 'center'
        }} className="card  m-4 shadow-lg bg-cyan-300 justify-center ">

            <li style={{
                color: 'black',
                fontWeight: 'bold'
            }} className="text-center justify-center">
                <div>
                    <img src={character.image} alt={character.fullName} />
                </div>
                <div>
                    {(character.index + 1) + ' - ' + character.fullName}
                </div>

                <div>
                    {character.birthdate}
                </div>
            </li>

        </div>
    )
}

export default CharacterCard