import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = () => {
        if (password !== rePassword) {
            alert("Sifreler uyusmuyor")
            return
        }
        dispatch(register({ username, password }))
    }

    return (
        <div>
            <h1>Kayıt Ol</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <input type="text" placeholder='Kullanıcı Adını Giriniz'
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={username} />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Sifrenizi Giriniz' />

                <input onChange={(e) => { setRePassword(e.target.value) }} value={rePassword} type="password" placeholder='Sifrenizi Tekrar Giriniz' />
                <button onClick={() => {
                    handleRegister()
                    navigate("/")
                }}>Kayıt Ol</button>
            </div>
        </div>
    )
}

export default Register