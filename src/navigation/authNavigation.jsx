import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgetPassword from '../pages/auth/ForgetPassword'

const AuthNavigation = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route />
        </Routes>
    )
}

export default AuthNavigation