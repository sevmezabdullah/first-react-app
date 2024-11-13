

const LoadMoreButton = ({ fetchMoreImages, setHasMore, }) => {
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }}>
            <button onClick={() => {
                fetchMoreImages()
                setHasMore((value) => {
                    return !value
                })
            }} className="btn btn-primary">Daha Fazla Yükle</button>
        </div>
    )
}

export default LoadMoreButton