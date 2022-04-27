import React from 'react'
import Link from 'next/link'

const postContact = () => {
  return (
    <div className='flex mt-28 flex-col mx-auto lg:max-w-7xl'>
      <h1 className='text-2xl text-center'>Thanks for contacting us, we will answer you as soon as posible.</h1>
      <button type="button" className="text-2xl m-5 self-center shadow bg-white hover:bg-zinc-900 focus:shadow-outline focus:outline-none text-zinc-900 hover:text-slate-50 font-bold py-2 px-4 border-0 rounded-md">
        
        <Link href="/">
        Go Back to Home
        </Link>
      </button>
      </div>
  )
}

export default postContact