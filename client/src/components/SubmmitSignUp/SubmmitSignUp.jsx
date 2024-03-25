import React from 'react';
import { SignUpButtonText } from '../../constants/textConstants';

export default function SubmmitSignUp() {
  return (
    <div className='w-5/6 h-10  max-sm:ml-0 mt-3 flex justify-center items-center'>
      <button type='submmit' className="w-52 h-full rounded bg-red-400 text-white transition-colors duration-300 hover:bg-red-500">{ SignUpButtonText }</button>
    </div>
  );
}
