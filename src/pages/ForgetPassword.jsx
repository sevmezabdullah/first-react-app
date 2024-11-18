import React from 'react'

const ForgetPassword = () => {
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
            <h1>Şifrenimi Unuttun ? Merak Etme Biz Burdayız</h1>

            <input type="text" placeholder='Kullanıcı Adı' />

            <button>Parola Sıfırla</button>



            <a href="/register">Hesabın mı yok ? Kayıt Ol</a>
        </div>
    )
}

export default ForgetPassword