import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const cart = useSelector(state => state.cart)
    return (
        <div>
            <h1>Ödeme Adımı</h1>

            <div style={{
                gap: '10px',
            }}>
                <input type="text" placeholder='Ad Soyad' />
                <input type="text" placeholder='Kart Numarası ' />
                <input type="text" placeholder='Son Kullanma Tarihi' />
                <input type="text" placeholder='CVV' />
            </div>
            <div style={{
                marginTop: '10px'
            }}>
                <button>Ödemeyi Tamamla {cart.reduce((acc, product) => acc + product.price, 0) + " TL"}</button>
            </div>
        </div>
    )
}

export default Checkout