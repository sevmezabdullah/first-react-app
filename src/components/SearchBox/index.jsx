

const SearchBox = ({ value, setValue }) => {

    return (
        <div className="form-control mx-5">
            <input value={value} onChange={(e) => setValue(e.target.value)} className='input input-bordered' placeholder='Ara...' type="text" />
        </div>
    )
}

export default SearchBox