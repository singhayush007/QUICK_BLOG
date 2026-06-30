import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent' role='status' aria-label='Loading' />
    </div>
  )
}

export default Loader
