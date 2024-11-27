import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, removeFromCart } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <h1>Sepetim</h1>
                <a href="/">Ürünleri Gör</a>
            </div>
            <ul style={{
                listStyleType: 'none'
            }}>
                {cart.map((product, index) => (
                    <div style={{
                        border: '1px solid black',
                        padding: '10px',
                        margin: '10px'
                    }} key={index}>
                        <li >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <p>{product.name}</p>
                                <p>{product.price + ' TL'}</p>
                                <button onClick={() => {
                                    dispatch(removeFromCart(product.id))
                                }}>Sepetten Çıkar</button>
                            </div>
                        </li>
                    </div>
                ))}

                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}>Toplam Fiyat :{cart.reduce((acc, product) => acc + product.price, 0) + ' TL'}</p>

                <div style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                    <button onClick={() => {
                        dispatch(cleanCart())
                    }}>Sepeti Temizle </button>
                    <button onClick={() => {
                        navigate('/checkout')
                    }}>Ödeme Sayfasına Git</button>
                </div>

            </ul>
        </div>
    )
}

export default Cart