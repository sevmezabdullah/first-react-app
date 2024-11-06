import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import CharacterList from "./components/CharacterList"


//BASE URL 
const URL = "https://potterapi-fedeperin.vercel.app/en/"

// Rehber Uygulaması
const App = () => {


  const apiURL = import.meta.env.VITE_BASE_URL

  const [characters, setCharacters] = useState([])

  // Global Scope - Local Scope

  // Hosting - Endpoints


  // Hosting Adres Yapısı
  // http://localhost:3000 - default :
  // http://127.0.0.1:3000

  // Endpoint Yapısı
  // http://localhost:3000/contacts
  // http://127.0.0.1:3000/books


  // Endpointlerde Query ve Params Kullanımı
  // http://localhost:3000/animals?type=flying


  // Büyük Projelerde Servis Ortamları - APIs

  // Staging, Development, Testing, Production

  // Dev Ortamı - Development
  // https://dev.api.com/users

  // Production Ortamı - Production
  // https://api.com/users

  // Staging Ortamı - Staging
  // Pen ortamı - Stress Testleri 
  // https://staging.api.com/users

  // Testing Ortamı - Testing
  // https://testing.api.com/users



  useEffect(() => {

    //Definition Order
    const fetchCharacters = async () => {
      const response = await axios.get(URL + 'characters')


      setCharacters(response.data)
    }

    // Execution Order
    fetchCharacters()
  }, [])

  return (
    <>

      <CharacterList characters={characters} />



    </>
  )
}

export default App