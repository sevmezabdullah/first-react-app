
import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';


// Rehber Uygulaması
const App = () => {
  //formik - formlardaki olayları dinleyip verileri kontrol eder.

  //yup - veri validasyonu yapar.


  // Contact State
  const [contacts, setContacts] = useState([]);
  const [baseList, setBaseList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    filterContacts(searchValue)

    if (searchValue === '') {
      setContacts(baseList)
    }
  }, [searchValue])


  const filterContacts = (value) => {
    setContacts(contacts.filter((contact) => contact.firstName.toLowerCase().includes(value.toLowerCase())))
  }

  const handleSubmit = (values, { resetForm }) => {
    //  console.table(values);

    //Eğer güncelleme yapılırsa
    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = values
      setContacts(updatedContacts);
      setEditIndex(null);
    }
    // Eğer ekleme yapılırsa
    else {
      setContacts([...contacts, values]);
      setBaseList([...contacts, values]);
    }

    resetForm();
  }
  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  }
  const handleEdit = (index) => {
    setEditIndex(index);
  }


  return (
    <>

      <div className='bg-base-100'>
        <div>
          <h1 style={{ fontSize: "60px" }} className='text-center '>Rehber Uygulaması</h1>
        </div>


        {/* initialValues %99 boş geçilir. %1 ihtimal dolu başlamasını isterler*/}
        <ContactForm initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          adress: '',
          email: '',
        }} onSubmit={handleSubmit} />



        <SearchBox setValue={setSearchValue} value={searchValue} />
        <div className='mt-8'>
          <ContactList contactList={contacts} onDelete={handleDelete} onEdit={handleEdit} />
        </div>

      </div>




    </>
  )
}

export default App