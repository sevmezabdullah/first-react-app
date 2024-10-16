/* eslint-disable react/prop-types */

import ProductItem from "../ProductItem/ProductItem"



// Listelenecek ürünlere ihtiyacım var.
const ProductList = ({ products, addToBasket }) => {
    return (
        <ul style={{
            listStyleType: 'none',
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {products.map((product) => (
                <ProductItem
                    addToBasket={addToBasket}
                    key={product.id} productItem={product} />
            ))}
        </ul>
    )
}

export default ProductList