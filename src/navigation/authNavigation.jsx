
import { Routes, Route, useNavigate, Router } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgetPassword from '../pages/ForgetPassword'
import NotFound from '../pages/NotFound'
import secureLocalStorage from 'react-secure-storage'
const AuthNavigation = ({ user, setUser, router }) => {
    const navigate = useNavigate()

    const login = () => {
        secureLocalStorage.setItem('user', JSON.stringify({ role: 'admin', username: 'admin' }))
        /*         localStorage.setItem('user', JSON.stringify({ role: 'admin', username: 'admin' })) */
        setUser({ role: 'admin', username: 'admin' })
        navigate('/')


    }
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login login={login} />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forget-password' element={<ForgetPassword />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AuthNavigation