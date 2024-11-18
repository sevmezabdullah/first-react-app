
import { Routes, Route } from 'react-router-dom'
import User from '../pages/user/User'
const UserNavigation = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<User />} />

            </Routes>
        </div>
    )
}

export default UserNavigation