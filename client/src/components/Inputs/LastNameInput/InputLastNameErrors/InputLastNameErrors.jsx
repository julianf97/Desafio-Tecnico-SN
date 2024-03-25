import React from 'react';

export default function InputLastNameErrors({ errors }) {
  return (
    <>
      <div className='w-11/12 max-sm:w-full flex justify-start items-center h-8 max-sm:h-4 max-sm:ml-1 ml-6'>
        {errors.apellido && <span className="text-red-500 text-sm">{errors.apellido.message}</span>} 
      </div>
    </>
  );
}
