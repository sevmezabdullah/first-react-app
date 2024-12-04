import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/admin/Home'

const AdminNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Home />} />
        </Routes>
    )
}

export default AdminNavigation