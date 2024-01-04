import CreateForm from '@/components/CreateForm'
import Hero from '@/components/Hero'
import Modals from '@/components/Modals'
import {FiPlusCircle} from "react-icons/fi"

export default function Home() {
  return (
   <main>
    <Hero />
    <nav className='flex gap-6 px-4 py-8 justify-between items-center cursor-pointer'>
      <Modals 
        opening={<div className='flex items-center gap-1'><FiPlusCircle /> Create</div>}
        title={'Add Contacts'}
        children={<CreateForm />}
      />
    </nav>
    <div className='flex flex-col px-4 py-4'>
    <span>Search</span>

    <div className='bg-orange-200'>
      contacts
    </div>
    </div>
   </main>
  )
}
