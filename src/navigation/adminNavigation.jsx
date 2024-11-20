import { Routes, Route } from 'react-router-dom'
import Home from '../pages/admin/Home'
import Profile from '../pages/admin/Profile'

/**
 * AdminNavigation component, returns a div with Routes and Route elements.
 * Route paths are '/' and '/admin', both rendering the Home component.
 * '/profile/:id' renders the Profile component, passing the id as a parameter.
 * @returns {React.ReactElement} A div with Routes and Route elements.
 */
const AdminNavigation = ({ user, setUser }) => {

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home logout={logout} />} />
                <Route path='/admin' element={<Home logout={logout} />} />
                <Route path='/profile/:id' element={<Profile />} />

            </Routes>
        </div>
    )
}

export default AdminNavigation