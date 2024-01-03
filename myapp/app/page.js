import CreateForm from '@/components/CreateForm'
import Hero from '@/components/Hero'
import Modals from '@/components/Modals'

export default function Home() {
  return (
   <main>
    <Hero />
    <nav className='flex px-4 py-8 justify-between items-center'>
      <Modals 
        opening={'Create Contact'}
        title={'Add Contacts'}
        description={'Name is required'}
        children={<CreateForm />}
      />
    </nav>
    <div className='flex items-center'>

    </div>
   </main>
  )
}
