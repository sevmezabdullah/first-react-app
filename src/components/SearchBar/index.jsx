import SearchButton from "../SearchButton"

/**
 * A search bar component that allows users to input search text.
 *
 * @param {object} props - The component props.
 * @param {string} props.searchText - The current search text.
 * @param {function} props.setIsUserStoppedTyping - Function to update the search text.
 */
const SearchBar = ({ searchText, setSearchText, setIsUserStoppedTyping, fetchImages }) => {

    /*     const timer = setTimeout(() => {
            console.log("timeout")
            setIsUserStoppedTyping(true)
        }, 2000) */
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
            alignItems: "center"
        }}>
            <input style={{
                width: "350px",
                border: "1px solid white",
                height: "40px",
                borderRadius: "10px",
                padding: "10px"
            }} value={searchText} type="text" placeholder="Aramak istediğiniz resmi giriniz" onChange={async (e) => {
                setSearchText(e.target.value)

                console.info("Search Text : ", searchText)
            }} />
            <SearchButton fetchImages={fetchImages} />
        </div>
    )
}

export default SearchBar