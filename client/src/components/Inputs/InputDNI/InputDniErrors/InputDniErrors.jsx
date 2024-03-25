import React from 'react'

export default function InputDniErrors({ errors }) {
  return (
    <div className='w-11/12 h-8 max-sm:w-full max-sm:h-4 max-sm:ml-1'>
        {errors.dni && <span className="text-red-500 text-sm">{errors.dni.message}</span>} 
    </div>
  )
}
