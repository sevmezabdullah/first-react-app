

import { useEffect, useState } from 'react'
import AuthNavigation from './navigation/authNavigation'
import AdminNavigation from './navigation/adminNavigation'
import UserNavigation from './navigation/userNavigation'

import secureLocalStorage from 'react-secure-storage'


function App() {

  const [user, setUser] = useState(null)


  const checkUser = async () => {
    const storedUser = secureLocalStorage.getItem('user')
    const decodedUser = storedUser ? await JSON.parse(storedUser) : null
    setUser(decodedUser)
  }


  useEffect(() => {
    checkUser()
  }, [])


  useEffect(() => {

  }, [user])


  return (
    <>

      {user && user.role === "admin" && <AdminNavigation user={user} setUser={setUser} />}
      {user && user.role === "user" && <UserNavigation />}
      {!user && <AuthNavigation user={user} setUser={setUser} />}



    </>
  )
}

export default App
