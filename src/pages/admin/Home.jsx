import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Home = ({ logout }) => {
    const navigate = useNavigate()
    const user = {
        id: 1,
        role: 'admin',
        username: 'admin'
    }

    useEffect(() => {
        const timeInterval = setTimeout(() => {
            console.log('merhaba')
        }, 5000)

        return () => {
            clearTimeout(timeInterval)
        }
    })
    return (
        <div>
            <p style={{
                fontSize: '60px'
            }}>Yönetici Sayfası</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo perferendis repellat ex vero nobis ipsum quaerat sequi molestias similique quibusdam saepe, libero temporibus quae, non deserunt. Deserunt, in sapiente!</p>

            <h1>Bu verileri görmek için yetkiniz var.</h1>
            <div style={{
                gap: '10px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <button onClick={() => {
                    navigate(`/profile/${user.id}`, { state: { user: user } })
                }}>Profil Sayfasına Git</button>
                <button onClick={() => {
                    logout()
                    navigate('/')
                }}>Çıkış Yap</button>
            </div>
        </div>
    )
}

export default Home