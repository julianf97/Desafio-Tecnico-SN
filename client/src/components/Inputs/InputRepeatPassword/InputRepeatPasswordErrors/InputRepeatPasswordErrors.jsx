import React from 'react'

export default function InputRepeatPasswordPasswordErrors({ errors }) {
  return (
    <div className='w-full h-8 max-sm:h-4'>
      {errors.repeatPassword && <span className="text-red-500 text-sm">{errors.repeatPassword.message}</span>}
    </div>
  )
}
