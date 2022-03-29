import spinner from '../layout/assets/spinner.gif'
import React from 'react'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spinner} alt="Loading..." width={180} className='text-center mx-auto' />
    </div>
  )
}

export default Spinner