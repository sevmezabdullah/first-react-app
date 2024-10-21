/* eslint-disable react/prop-types */
import { useEffect } from "react"
import AgeText from "../AgeText/AgeText"


const AgeContainer = () => {

    useEffect(() => {
        console.info('Ekran çizildi. - AgeContainer.jsx')
    })
    return (
        <div style={{
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            borderRadius: '10px',
            display: 'inline-block',
            backgroundColor: 'lightgray'
        }}><AgeText />
        </div>
    )
}

export default AgeContainer