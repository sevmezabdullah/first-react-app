import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <div>
            <header style={{
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white'
            }}>Sabit Sayfa Başlığı</header>
            <main>
                <Outlet />
            </main>
            <footer style={{
                textAlign: 'center',
                backgroundColor: 'red',
                color: 'white'
            }}>Sabit Sayfa Altı</footer>
        </div>
    )
}

export default Layout