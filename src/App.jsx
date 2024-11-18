

import { useEffect, useState } from 'react'
import AuthNavigation from './navigation/authNavigation'
import AdminNavigation from './navigation/adminNavigation'
import UserNavigation from './navigation/userNavigation'




function App() {

  const [user, setUser] = useState(null)


  const checkUser = async () => {
    const storedUser = localStorage.getItem('user')
    const decodedUser = storedUser ? await JSON.parse(storedUser) : null
    setUser(decodedUser)
  }


  useEffect(() => {

    checkUser()
    if (user) {
      console.log(user)
    }
  },)



  return (
    <>

      {user && user.role === "admin" && <AdminNavigation />}
      {user && user.role === "user" && <UserNavigation />}
      {!user && <AuthNavigation />}



    </>
  )
}

export default App
