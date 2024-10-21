
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <p style={{
                fontSize: '60px'
            }}>Home</p>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home