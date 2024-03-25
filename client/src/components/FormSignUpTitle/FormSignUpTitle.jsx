import React from 'react';
import { titleFormSignUp } from '../../constants/textConstants';

export default function FormSignUpTitle() {
  return (
    <div className='w-full h-auto flex justify-center items-center pt-8 pb-4'>
      <h1 className=' text-2xl font-bold text-[#303030] text-center select-none'>{ titleFormSignUp }</h1>
    </div>
  );
}
