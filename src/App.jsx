import { useSelector } from "react-redux"
import AuthNavigation from "./navigation/authNavigation"
import ProtectedNavigation from "./navigation/ProtectedNavigation"
import AdminNavigation from "./navigation/adminNavigation"
import { ROLES } from "./enums/roles"


function App() {


  //const token = useSelector(state => state.auth.token)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const isLoading = useSelector(state => state.auth.isLoading)
  const role = useSelector(state => state.auth.role)



  return (
    <>
      {isAuthenticated && role === ROLES.ADMIN && <AdminNavigation />}
      {isAuthenticated && !isLoading && role === ROLES.USER && <ProtectedNavigation />}
      {!isAuthenticated && <AuthNavigation />}
    </>
  )
}

export default App
