import React from 'react';
import { titleFormLogin } from '../../constants/textConstants';

export default function FormLoginTitle() {
  return (
    <div className='w-full h-auto flex justify-center items-center pt-8 pb-4'>
      <h1 className=' text-2xl font-bold text-[#303030] text-center select-none'>{ titleFormLogin }</h1>
    </div>
  );
}
