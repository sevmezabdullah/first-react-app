import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Login = ({ login }) => {
    const navigate = useNavigate()

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'lightgray',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <h1>Giriş Yap</h1>

            <input type="text" placeholder='Kullanıcı Adı' />
            <input type="password" placeholder='Parola' />
            <button onClick={() => {

                login()
                navigate('/')
            }}>Giriş Yap</button>

            <a href="/forget-password">Şifremi Unuttum ? </a>
            <Link to={"/forget-password"}>Kampanyalar</Link>
            <a href="/register">Hesabın mı yok ? Kayıt Ol</a>
        </div>
    )
}

export default Login