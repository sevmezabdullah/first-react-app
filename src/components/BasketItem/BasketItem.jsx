/* eslint-disable react/prop-types */


const BasketItem = ({ item, removeFromBasket }) => {
    return (
        <li key={item.id}>
            {item.name}
            <button style={{ marginLeft: '10px', margin: '10px' }} onClick={() => removeFromBasket(item.id)}>Sepetten Çıkar</button>
        </li>
    )
}

export default BasketItem