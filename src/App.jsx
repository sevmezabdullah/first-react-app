import { useEffect, useState } from "react"
import axios from 'axios'

const API_URL = "http://localhost:5000/users";

function App() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [editingId, setEditingId] = useState(null)


  useEffect(() => {
    fetchUser()
  }, [])


  // formik - validasyon - doğrulama kütüphanesi
  const addUser = async () => {
    if (name && email) {
      const newUser = {
        email, name
      }
      await axios.post(API_URL, newUser)
      fetchUser()
      setName("")
      setEmail("")
    }
  }

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    fetchUser()
  }

  const updateUser = async () => {
    if (name && email) {
      await axios.put(`${API_URL}/${editingId}`, { name, email })
      fetchUser()
      setName("")
      setEmail("")
      setEditingId(null)
    }
  }

  const fetchUser = async () => {
    const response = await axios.get(API_URL)
    const users = response.data
    setUsers(users)
  }

  const editUser = async (user) => {
    setName(user.name)
    setEmail(user.email)
    setEditingId(user.id)
  }

  return (
    <>
      <div>

        <h1 className="text-2xl font-bold ms-10 mt-10">Kullanıcı Listesi</h1>
        <div>
          <label className="input input-bordered flex items-center gap-2 m-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email adresinizi giriniz" />
          </label>
          <label className="input input-bordered m-10 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="Adınızı giriniz" />
          </label>

          {editingId ? (<button onClick={updateUser} className="btn btn-outline btn-success mx-10">Güncellemeyi Tamamla</button>) : (<button onClick={addUser} className="btn btn-outline btn-info mx-10">Kullanıcı Ekle</button>)}
        </div>
        <ul>
          {users.map((user) => {
            return <li className="ms-10" key={user.id}>{user.name} - {user.email}
              <button onClick={() => {
                editUser(user)
              }} className="btn btn-outline btn-warning m-3">Düzenle</button>
              <button onClick={() => {
                deleteUser(user.id)
              }} className="btn btn-outline btn-error">Sil</button>
            </li>

          })}
        </ul>
      </div>
    </>
  )
}

export default App
