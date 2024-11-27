import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productSlice"
import { addToCart } from "../../store/cartSlice"
import { useNavigate } from "react-router-dom"



// Listelenecek ürünlere ihtiyacım var.
const ProductList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items, status } = useSelector(state => state.products)


    const cart = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <h1>Ürünlerimiz</h1>
                <button onClick={() => { navigate('/cart') }}>Sepeti Görüntüle {"(" + cart.length + ")"}</button>
            </div>
            <ul style={{
                listStyleType: 'none'
            }}>
                {items.map((product, index) => {
                    return <li key={index}>
                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            margin: '10px',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div>
                                <img src={product.image} alt="" />
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <h2>{product.name}</h2>
                                    <h3>{product.price}</h3>
                                    <button onClick={() => {
                                        dispatch(addToCart(product))
                                    }}>Sepete Ekle</button>
                                </div>
                            </div>

                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductList