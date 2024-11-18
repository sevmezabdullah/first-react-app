
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgetPassword from '../pages/ForgetPassword'
const AuthNavigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forget-password' element={<ForgetPassword />} />
            </Routes>
        </div>
    )
}

export default AuthNavigation