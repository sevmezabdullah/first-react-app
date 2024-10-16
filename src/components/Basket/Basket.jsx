/* eslint-disable react/prop-types */

import BasketItem from "../BasketItem/BasketItem"


const Basket = ({ basket, removeFromBasket }) => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            borderRadius: '10px'
        }}>
            <p>Sepetteki ürün sayısı :  {basket.length}</p>

            <div>
                <h2>Sepetim</h2>
                <ul style={{
                    listStyleType: 'none',
                }}>
                    {basket.map((product, index) => (
                        <BasketItem removeFromBasket={removeFromBasket} item={product} key={index} />
                    ))}
                </ul>
                <p>Toplam Fiyat :{
                    basket.reduce((acc, product) => acc + product.price, 0)}</p>
            </div>

        </div>
    )
}

export default Basket