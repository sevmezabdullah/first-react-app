/* eslint-disable react/prop-types */
import { useEffect } from "react"
import AgeContainer from "../AgeContainer/AgeContainer"


const AgeCover = () => {
    useEffect(() => {
        console.info('Ekran çizildi. - AgeCover.jsx')
    })
    return (
        <div style={{
            border: '1px solid red',
            padding: '20px',
            margin: '30px',
            borderRadius: '10px',
            display: 'inline-block',
            backgroundColor: 'blue',
        }}>
            <AgeContainer />
        </div>
    )
}

export default AgeCover