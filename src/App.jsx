import { useState, } from "react"
import { useTranslation } from "react-i18next"
import useFetch from "./hooks/useFetch"


const App = () => {


  // 3.parti paket olarak gelen custom hook
  const { t, i18n } = useTranslation()
  // Hooklar Hayatımızı Kolaylaştırır. İyiki varlar.
  const [count, setCount] = useState(20)

  //kendi yazdığımız hook
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1')


  // hooklar geriye değer dönen fonksiyonlar.

  //setCount : değişebilen değeri bir fonksiyon içerisinde günceller. Ve yeni değeri geri döner.




  return (
    <>
      <div style={{
        visibility: 'hidden',
      }}>
        <p style={{ fontSize: '60px', textAlign: 'center' }}>{t('welcome')}</p>
        <p id="count" style={{ fontSize: '60px', textAlign: 'center' }}>{count}</p>

        <div style={{
          justifyContent: 'center',
          display: 'flex',
        }}>

          <button onClick={() => {
            setCount((value) => {
              console.info(value)
              value += 1
              return value
            })

            setCount((value) => value + 1)
            setCount(count + 1)
          }} className="btn btn-primary">{t('increment')}</button>
          <button onClick={() => {
            setCount(() => {
              return count - 5
            })
          }} className="btn btn-warning ml-2">{t('decrement')}</button>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
          <button onClick={() => {
            i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')
          }} className="btn btn-success mx-auto">{t('changeLanguage')}</button>
        </div>
      </div>


      <div style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '60px',
        }}>Veri Çekme</h1>

        {loading && <p style={{ fontSize: '60px' }}>Yükleniyor...</p>}

        {error && <p>Hata</p>}
        {data && <p style={{ fontSize: '60px' }}>{data.title}</p>}
      </div>


    </>
  )
}

export default App