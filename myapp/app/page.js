import HeadingText from '@/components/HeadingText'
import Navbar from '@/components/Navbar'
import { deleteContact } from '@/lib/action'
import { getContacts } from '@/lib/data'
import Link from 'next/link'
import {FiEdit, FiTrash2} from "react-icons/fi"


const HomePage = async () => {
  const contacts = await getContacts()
  return (
    <main>
    <HeadingText
    title='Contact Book'
    description='All Contact Below'
    />
  <Navbar />
    <div className='flex flex-col px-4 py-4'>
    <span>Search</span>

    <div className=' py-4'>
      <table
      className='table-auto w-full text-left whitespace-no-wrap'
      >
        <thead>
          <tr>
            <th 
            className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              First Name
            </th>
            <th
            className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Last Name
            </th>
            <th
            className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
            Email
            </th>
            <th
            className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Contact Number
            </th>
            <th
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.firstName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.lastName}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.email}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.phone}</td>
                  <td className='border-t-2 text-center border-gray-200 px-4 py-3 flex gap-2'>
                    <Link href={`/contact/${contact.id}`}>
                      <FiEdit />
                    </Link>
                    <form
                    action={deleteContact}
                    >
                      <input type="hidden" name="id" value={contact.id} />
                    <button
                    type='submit'
                    >
                    <FiTrash2 style={{color: 'red'}} />
                    </button>
                    </form>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    </div>
   </main>
  )
}

export default HomePage

