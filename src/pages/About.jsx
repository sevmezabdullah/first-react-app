

import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div><p style={{
            fontSize: '60px'
        }}>About</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default About