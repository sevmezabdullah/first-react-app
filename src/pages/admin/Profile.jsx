import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Profile = () => {
    const { id } = useParams()
    let location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Profil</h1>
            <p>Kullanıcı ID : {id}</p>
        </div>
    )
}

export default Profile