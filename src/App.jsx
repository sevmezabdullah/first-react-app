

import { useEffect, useState } from 'react'
import ProductList from './components/ProductList/ProductList'
import Basket from './components/Basket/Basket'
//Zustand , Redux Toolkit , Context API

// Moduler Javascript
// import : dışardan paket alma, kullanma
// export : bir paketi dışarı açmak, class, fonksiyon, değişken


const products = [
  {
    id: 1,
    name: 'iPhone 13',
    price: 1000,
    description: 'The latest iPhone',
    imageUrl: 'https://www.iphone13.com/wp-content/uploads/2021/09/iPhone13_091513.jpg',
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 2000,
    description: 'The latest iPhone',
    imageUrl: 'https://www.iphone13.com/wp-content/uploads/2021/09/iPhone13_091513.jpg',
  },
  {
    id: 3,
    name: 'iPhone 15',
    price: 3000,
    description: 'The latest iPhone',
    imageUrl: 'https://www.iphone13.com/wp-content/uploads/2021/09/iPhone13_091513.jpg',
  },
]

function App() {


  const [basket, setBasket] = useState([])

  // Sayfa render edildiğinde bir kere çalışır.
  useEffect(() => {
    console.log('Sepetteki ürünler :', basket)

    //Clean Up
    return () => {
      console.log('Sayfa kapatıldı')
    }
  }, [basket])


  const addToBasket = (product) => {
    setBasket([...basket, product])
  }

  const removeFromBasket = (id) => {
    setBasket(basket.filter((product) => product.id !== id))
  }

  // hook 

  return (
    <>
      <h1>AbdullahBurada.com</h1>

      <Basket removeFromBasket={removeFromBasket} basket={basket} />
      <ProductList addToBasket={addToBasket} products={products} />
    </>
  )
}

export default App
