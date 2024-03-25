import React from 'react'

export default function InputEmailErrors({ errors }) {
  return (
    <div className='w-full h-8 max-sm:h-4'>
      {errors.email  && <span className="text-red-500 text-sm">{errors.email.message}</span>}
    </div>
  )
}
