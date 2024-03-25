import React from 'react';
import { tramiteTitleForm } from '../../constants/textConstants';

export default function FormTramiteTitle() {
  return (
    <div className='w-full h-auto flex justify-center items-center pt-8 pb-4'>
      <h1 className=' text-2xl font-bold text-[#303030] text-center select-none'>{ tramiteTitleForm }</h1>
    </div>
  );
}
