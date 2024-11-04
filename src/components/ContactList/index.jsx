import React from 'react'

const ContactList = ({ contactList, onEdit, onDelete }) => {
    return (
        <div className='overflow-x-auto'>
            <table className='table table-zebra w-full'>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Telefon Numarası</th>
                        <th>Adres</th>
                        <th>Email</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.adress}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button className='btn btn-warning btn-xs' onClick={() => onEdit(index)}>Güncelle</button>
                                <button className='btn btn-error btn-xs' onClick={() => onDelete(index)}>Sil</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ContactList