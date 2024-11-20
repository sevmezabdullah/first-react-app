import { Routes, Route } from 'react-router-dom'

import Profile from '../pages/admin/Profile'
import React, { Suspense } from "react"
import Fallback from '../pages/Fallback'
import Layout from '../pages/Layout'
import NestedHome from '../pages/NestedHome'
import NestedAdmin from '../pages/NestedAdmin'

const LazyHome = React.lazy(() => import('../pages/admin/Home'))
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
                {/*       <Route path='/' element={
                    <Suspense fallback={<Fallback />}>
                        <LazyHome logout={logout} />
                    </Suspense>} />
                <Route path='/admin' element={<Suspense fallback={<Fallback />}>
                    <LazyHome logout={logout} />
                </Suspense>} /> */}
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/' element={<Layout />} >
                    <Route index element={<NestedHome />} />
                    <Route path='/admin' element={<NestedAdmin />} />
                </Route>

            </Routes>
        </div>
    )
}

export default AdminNavigation