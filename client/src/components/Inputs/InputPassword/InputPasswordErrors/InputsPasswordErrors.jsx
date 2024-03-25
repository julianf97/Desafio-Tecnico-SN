import React from 'react'

export default function InputPasswordErrors({ errors }) {
  return (
    <div className='w-full h-8 max-sm:h-4'>
      {errors.password  && <span className="text-red-500 text-sm">{errors.password.message}</span>}
    </div>
  )
}
