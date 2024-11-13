
//import styles from './SearchButton.module.css'
const SearchButton = ({ fetchImages }) => {

    //className={styles.button}
    return (
        <button className="btn btn-primary" onClick={fetchImages} >Arama Yap</button>
    )
}

export default SearchButton