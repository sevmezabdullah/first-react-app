

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")


    const [password, setPassword] = useState("")



    const handleLogin = () => {
        dispatch(login({ username, password }))
    }
    return (
        <div>
            <h1>Giriş Sayfası</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }
                } value={username} type="text" placeholder='Kullanıcı Adını Giriniz' />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                    console.log("🚀 ~ file: Login.jsx:2 ~ Login ~ e.target.value:", e.target.value)
                }} value={password} type="password" placeholder='Sifrenizi Giriniz' />
                <button onClick={() => {
                    handleLogin()
                }}>Giriş Yap</button>
            </div>

        </div>
    )
}

export default Login