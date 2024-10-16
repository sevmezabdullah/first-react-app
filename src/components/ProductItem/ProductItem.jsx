/* eslint-disable react/prop-types */


// Named Function
const ProductItem = ({ productItem, addToBasket }) => {
    return (

        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px' }}>
            <img width={200} src={productItem.imageUrl} alt="" />
            <li>{productItem.name}</li>
            <li>{productItem.price}</li>
            <button onClick={() => {
                addToBasket(productItem)
            }}>Sepete Ekle</button>

        </div>
    )
}

export default ProductItem

