import HeadingText from '@/components/HeadingText'
import Navbar from '@/components/Navbar'
import React from 'react'

const SingleContact = ({params}) => {
  return (
    <section>
    <HeadingText
        title='Update Contact'
        description='View And Update Contacts Below'
        />
        <Navbar /> 
        <div className='flex flex-col px-4 py-4'>

        </div>
    </section>
  )
}

export default SingleContact