import { Routes, Route } from 'react-router-dom'
import Home from '../pages/admin/Home'
import Profile from '../pages/admin/Profile'

const AdminNavigation = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default AdminNavigation