import React from 'react';
import { buttonText } from '../../constants/textConstants';

export default function SubmmitTramite() {
  return (
    <div className='w-5/6 h-10 max-sm:mt-0 max-sm:ml-0 mt-5 flex justify-center items-center'>
      <button type='submmit' className="max-sm:w-5/6 w-96 h-full rounded bg-red-400 text-white transition-colors duration-300 hover:bg-red-500">{buttonText}</button>
    </div>
  );
}
