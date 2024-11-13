

/**
 * A functional component that displays an image.
 *
 * @param {object} props - The component props.
 * @param {object} props.image - An image object with url properties.
 * @returns {JSX.Element} A div containing the image.
 */
const ImageCard = ({ image, setIsLoadingByIndex, index }) => {
    return (
        <div>
            <img onLoad={() => setIsLoadingByIndex({ isloading: false, index })} style={{
                borderRadius: "10px",
                width: "200px",
                height: "150px",
            }} src={image.urls.raw} alt="" />
        </div>
    )
}

export default ImageCard