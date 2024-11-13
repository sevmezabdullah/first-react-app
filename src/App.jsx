import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { ColorRing } from "react-loader-spinner";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ImageGallery from "./components/ImageGallery";
import ErrorMessage from "./components/ErrorMessage";

import LoadMoreButton from "./components/LoadMoreButton";


// Rehber Uygulaması
const App = () => {

  const [searchText, setSearchText] = useState("");

  const [images, setImages] = useState([])

  const [perPage, setPerPage] = useState(10)

  const [hasMore, setHasMore] = useState(false)

  const [isUserStoppedTyping, setIsUserStoppedTyping] = useState(false)


  const [error, setError] = useState(null)

  const [isLoading, setIsLoadingByIndex] = useState({ isLoading: false, index: 0 })



  //Bug - Her harfte isteğe çıkılmaması gerekiyor - 
  const fetchImages = async (searchTextValue) => {
    const url = `https://api.unsplash.com/search/photos/?client_id=U2zsliZ9Xd64SsgnDPu5jxOtmdMPXH5TyIRwnFT75CI&query=${searchTextValue}&page=1&per_page=10`

    if (searchText.length > 0) {

      setIsLoadingByIndex(true)
      const response = await axios.get(url)
      setImages(response.data.results)
    }
  }
  const fetchMoreImages = async () => {

    setPerPage(perPage + 10)
    const url = `https://api.unsplash.com/search/photos/?client_id=U2zsliZ9Xd64SsgnDPu5jxOtmdMPXH5TyIRwnFT75CI&query=${searchText}&page=1&per_page=${perPage}`

    setIsLoadingByIndex(true)
    const response = await axios.get(url)
    setImages(images.concat(response.data.results))


  }

  /* 
    useEffect(() => {
      console.info('Ekran çizildi. - App.jsx', searchText)
      fetchImages(searchText)
  
    }, [searchText, isUserStoppedTyping]) */



  return (
    <>

      <SearchBar fetchImages={fetchImages} setIsUserStoppedTyping={setIsUserStoppedTyping} searchText={searchText} setSearchText={setSearchText} />


      <Loader />
      <ImageGallery images={images} setIsLoadingByIndex={setIsLoadingByIndex} />
      <ErrorMessage errorMessage={error} />

      <LoadMoreButton searchText={searchText} setHasMore={setHasMore} fetchMoreImages={fetchMoreImages} />
    </>
  )
}

export default App