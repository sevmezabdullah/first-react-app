import React from 'react'

const Login = () => {
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
            <button>Giriş Yap</button>

            <a href="/forget-password">Şifremi Unuttum ? </a>

            <a href="/register">Hesabın mı yok ? Kayıt Ol</a>
        </div>
    )
}

export default Login