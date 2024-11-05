'use client'
import React, { useState } from 'react'
import superagent from 'superagent'

const Page = () => {
    
    const [loading, setLoading] = useState(false);
    const [incommingData, setIncommingData] = useState({})
    const inputCss = 'px-4 py-2 rounded-full border-2 border-gray-500 bg-gray-200 w-1/3'

    // handling form input, sending post request
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        const response = new FormData(e.target)
        const data = Object.fromEntries(response)

        console.log(data)
        superagent
        .post('https://httpbin.org/post')
        .send(data)
        .then((data => {
            console.log(data)
            setLoading(false)
            setIncommingData(data?.body?.json)
        }))
        .catch(console.error);

    }

    return (
    <div className='text-center'>
        <div className='m-5'>QUESTION 3 : Input form</div>

        {/* form for adding data */}
      <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center gap-5'>
        <input type='text' name='name' placeholder='Please enter your name...' className={inputCss}/>
        <input type='email' name='email' placeholder='please enter your email...' className={inputCss}/>
        <input type='password' name='password' placeholder='Please enter you password' className={inputCss}/>
        <button type='submit' className='px-4 py-2 rounded-full shadow-sm bg-blue-600 text-white' >Submit</button>
      </form>
      {/* for showing input data */}
      {loading ? <div>loading please wait...</div> : <div>
        <div>Entered Details</div>
        <div>Name : {incommingData.name}</div>
        <div>Email : {incommingData.email}</div>
        <div>Password : {incommingData.password}</div>
    </div>}
    </div>
  )
}

export default Page
