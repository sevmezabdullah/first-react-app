import { useEffect } from "react"
import AgeCover from "./components/AgeCover/AgeCover"
import useStore from './store/store'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"


function App() {

  // State Yönetimi Nedir ? 

  // Durum - State - Degisken
  // Render İşlemi - Ekranın Çizilmesi
  // Re- Render işlemi - Tekrar eden renderlama

  // State tanımlama  işlemi maaliyetli bir işlem.
  //const [age, setAge] = useState(0)


  const increaseAge = useStore((state) => state.increaseAge)
  const decreaseAge = useStore((state) => state.decreaseAge)


  useEffect(() => {
    console.info('Ekran çizildi.')
  })



  return (
    <>
      <AgeCover />
      <button style={{
        fontSize: '30px',
        padding: '10px',
        margin: '10px',
      }} onClick={increaseAge}>Yas Arttırma Butonu</button>


      <button style={{
        fontSize: '30px',
        padding: '10px',
        margin: '10px',
      }} onClick={decreaseAge}>Yas Eksiltme Butonu</button>

      {/*     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}

    </>
  )
}

export default App
