import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col text-center h-[100vh]'>
        <header className='border border-red-600 min-h-[100px] p-7 h-1/3 bg-red-500'>
            Header
        </header>
        <main className='border border-green-700 flex flex-row p-7 min-h-[100px] h-1/3 bg-green-600'>
            <nav className='border border-orange-600 w-1/2 min-h-[100px] p-7 bg-orange-500'>Navbar</nav>
            <content className="border border-pink-600 w-1/2 min-h-[100px] p-7 bg-pink-500">Content</content>
        </main>
        <footer className='border border-blue-700 p-7 min-h-[100px] h-1/3 bg-blue-500'>
            Footer
        </footer>
    </div>
  )
}

// used flexbox for positioning items in format

export default Page
