import React from 'react'

const PageNotFound = () => {
  return (
    <div className='w-full h-[calc(100vh-60px)] bg-gray-800 text-zinc-200 flex justify-center items-center'>
      <h1 className='text-4xl font-bold text-zinc-700'><span className='text-red-500'>404: </span>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound