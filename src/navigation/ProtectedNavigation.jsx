import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/protected/Home'

const ProtectedNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protected" element={<Home />} />
        </Routes>
    )
}

export default ProtectedNavigation