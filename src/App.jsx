import { Route, Routes } from "react-router-dom"
import ProductList from "./components/ProductList/ProductList"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout"





function App() {



  return (
    <>


      {/*       <h1>Abdullah Ticaret Hizmetleri</h1>
      <ProductList /> */}


      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>


    </>
  )
}

export default App
