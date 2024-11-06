import CharacterCard from "../CharacterCard"


/**
 * CharacterList component
 * @param {Object} characters - list of characters
 * @returns {ReactElement} - CharacterList component
 */
const CharacterList = ({ characters }) => {
    return (
        <ul>
            {characters.map((character, index) => (
                <CharacterCard character={character} key={index} />
            ))}
        </ul>
    )
}

export default CharacterList