import { useMemo } from "react";
import { useRef, useState } from "react";


// Rehber Uygulaması
const App = () => {
  // useRef - 

  // deprecated - kullanımdan kaldırıldı. React 19 ile kullanımdan kaldırıldı.
  //  Performans optimizasyonu için kullanılır. Ağır işlemleri ihtiyaç olduğunda 1 kere yapar. Ve daha sonra ön belleğe alır.
  // Doğru kullanılmazsa daha çok performans problemi yaratabilirler.

  // Bir fonksiyonumuz var. Ve bu fonksiyon ram de 20 mb kaynak tüketiyor.
  // Her fonksiyon useMemo ve useCallback olarak tanımlanırsa bu sefer de ram de ciddi kaynak tüketebilir.
  // useMemo ve useCallback - 


  const [text, setText] = useState("");
  const [count, setCount] = useState(0);


  const inputRef = useRef()

  const expensiveResult = useMemo(() => expensiveCalculation(text), [text])


  function expensiveCalculation(text) {
    console.log("Expensive Calculation : ", text);
    let result = "";

    // 1000000 tane islem
    for (let i = 0; i < 1000000; i++) {
      result = `${text} ${i}`
    }
    return result;
  }


  const handleChange = (e) => {
    setText(e.target.value)

  }


  const focusInput = () => {

    inputRef.current.focus();
  }


  return (
    <>

      <div>

        <h1 style={{
          color: "red",
          fontSize: "40px",
          textAlign: "center"
        }}>useMemo ve useRef Kullanımı</h1>

        <input style={{
          border: "1px solid white",
          borderRadius: "10px",
        }} placeholder="Herhangi birşey yazınız" className="form-control p-4 mx-auto" type="text" onChange={handleChange} value={text} ref={inputRef} />
        <p style={{
          color: "white",
          fontSize: "40px",
          textAlign: "center"
        }}>Maliyetli işlemin sonucu : {expensiveResult}</p>





        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}>
          <button onClick={() => setCount(count + 1)} className="btn btn-primary">Sayıyı Artır {count}</button>
          <button className="btn btn-primary" onClick={focusInput} type="button">Inputa Odaklan</button>
        </div>
      </div>



    </>
  )
}

export default App