/* eslint-disable react/prop-types */

import { useEffect } from "react"
import useStore from '../../store/store'


const AgeText = () => {
    const age = useStore((state) => state.age);
    useEffect(() => {
        console.info('Ekran çizildi. - AgeText.jsx')
    })

    return (
        <p style={{
            fontSize: '60px',
        }}>Yaş : {age}</p>
    )
}

export default AgeText