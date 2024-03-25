import React from 'react';

export default function InputNameErrors({ errors }) {
  return (
    <div className='w-48 max-sm:w-full flex justify-start items-center max-sm:h-4 h-8'>
      {errors.nombre && <span className="text-red-500 text-sm text-center max-sm:ml-1">{errors.nombre.message}</span>}
    </div>
  );
}
