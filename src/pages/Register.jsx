import React from 'react'

const Register = () => {
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
            <h1>Kayıt Ol</h1>

            <input type="text" placeholder='Kullanıcı Adı' />
            <input type="password" placeholder='Parola' />
            <input type="password" placeholder='Parola Tekrar' />

            <label htmlFor="date">Doğum Tarihi</label>
            <input id='date' type="date" placeholder='Doğum Tarihi' />
            <button>Kayıt Ol</button>



            <a href="/">Hesabın mı var ? Giriş Yap</a>
        </div>
    )
}

export default Register