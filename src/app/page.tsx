import { FaCat } from 'react-icons/fa'

import Link from 'next/link'

const HomePage = () => {
  return ( 
    <main className='flex flex-col text-center items-center justify-center min-h-screen px-4'>
      <FaCat className='text-3xl md:text:4xl' />
      <h1 className='text-3xl md:text:4xl font-medium mb-4 text-orange-500'>Modulas Solutions</h1>
      <p className='text-lg text-grey-700 mb-8'>Support Ticket Management System</p>

      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <Link 
          href='/tickets/new'
          className='uppercase bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition'
        >
          Submit
        </Link>
        <Link 
          href='/tickets/new'
          className='uppercase bg-[#222] text-white px-6 py-3 rounded-md shadow hover:bg-black transition'
        >
          View
        </Link>
      </div>
    </main>
  )
}
 
export default HomePage
