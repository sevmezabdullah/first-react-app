import ImageCard from "../ImageCard"

/**
 * A component that displays a gallery of images.
 *
 * @param {object} props - The component props.
 * @param {array} props.images - An array of image objects with url and alt properties.
 * @returns {JSX.Element} A div containing the image gallery.
 */
const ImageGallery = ({ images, setIsLoadingByIndex }) => {
    return (
        <div>
            {
                images.length === 10 && images.map((image, index) => {
                    return (
                        <div style={{
                            margin: "10px",
                            borderRadius: "10px",
                            display: "inline-block"
                        }} key={index}>
                            <ImageCard image={image} index={index} setIsLoadingByIndex={setIsLoadingByIndex} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGallery