import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'



const validationSchema = Yup.object({
    firstName: Yup.string().required("İsim alanı zorunludur.").min(3, "En az 3 karakter olmalıdır.").max(30, "En fazla 30 karakter olmalıdır."),
    lastName: Yup.string().required("Soyisim alanı zorunludur.").min(3, "En az 3 karakter olmalıdır.").max(30, "En fazla 30 karakter olmalıdır."),

    phoneNumber: Yup.string().required("Telefon numarası alanı zorunludur.").min(11, "En az 11 karakter olmalıdır.").max(11, "En fazla 11 karakter olmalıdır."),
    adress: Yup.string().required("Adres alanı zorunludur.").min(3, "En az 3 karakter olmalıdır.").max(100, "En fazla 100 karakter olmalıdır."),
    email: Yup.string().email("Geçerli bir email adresi giriniz")
})



// onSubmit validasyon işlemi yapar. 
//initialValues formun ilk değişkenlerini verir.
const ContactForm = ({ onSubmit, initialValues }) => {
    return (
        <Formik validate={(values) => {
            /*       const errors = {};
      
                  if(values.firstName){
      
                  } */
        }} validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >

            {() => (
                <Form className='card bg-base-100 shadow-md p-4 max-w-lg mx-auto'>
                    <div className='form-control mb-4'>
                        <label className='label'>Ad</label>
                        <Field type='text' name='firstName' className='input input-bordered' />
                        <ErrorMessage name='firstName' component='div' className='text-red-500' />
                    </div>

                    <div className='form-control mb-4'>
                        <label className='label'>Soyad</label>
                        <Field type='text' name='lastName' className='input input-bordered' />
                        <ErrorMessage name='lastName' component='div' className='text-red-500' />
                    </div>

                    <div className='form-control mb-4'>
                        <label className='label'>Telefon Numarası</label>
                        <Field type='text' name='phoneNumber' className='input input-bordered' />
                        <ErrorMessage name='phoneNumber' component='div' className='text-red-500' />
                    </div>

                    <div className='form-control mb-4'>
                        <label className='label'>Adres</label>
                        <Field type='text' name='adress' className='input input-bordered' >

                        </Field>
                        <ErrorMessage name='adress' component='div' className='text-red-500' />
                    </div>

                    <div className='form-control mb-4'>
                        <label className='label'>Email</label>
                        <Field type='text' name='email' className='input input-bordered' />
                        <ErrorMessage name='email' component='div' className='text-red-500' />
                    </div>

                    <button type='submit' className='btn btn-primary w-full mt-4'>Kaydet</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm