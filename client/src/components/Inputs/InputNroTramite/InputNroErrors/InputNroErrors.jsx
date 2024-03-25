import React from 'react'

export default function InputNroErrors({ errors }) {
  return (
    <div className='w-11/12 h-8 max-sm:w-full max-sm:h-4 max-sm:ml-1 ml-6'>
        {errors.nroTramite && <span className="text-red-500 text-sm">{errors.nroTramite.message}</span>} 
    </div>
  )
}
