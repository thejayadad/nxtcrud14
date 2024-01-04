import CreateForm from '@/components/CreateForm'
import HeadingText from '@/components/HeadingText'
import Navbar from '@/components/Navbar'
import React from 'react'

const ContactsPage = () => {
  return (
    <section>
        <HeadingText
            title='Add Contact'
            description='Add Contacts Below'
           />
           <Navbar />
 
        <div className='flex flex-col px-4 py-4'>
        <CreateForm />
      </div>
    </section>
  )
}

export default ContactsPage