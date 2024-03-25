import React from 'react';
import { fileLabel, selectFile } from '../../../constants/textConstants';

export default function LabelAndButton({ register }) {
  const handleClick = (e) => {
    e.preventDefault(); 
    document.querySelector('input[type=file]').click();
  };

  return (
    <div className='flex justify-center items-center'>
      <label className=''>{ selectFile }</label>
      <input
        type="file"
        accept=".pdf, image/*"
        className={`w-20 ml-2 h-auto rounded flex justify-center items-center border-gray-300 border-2 bg-gray-50 `}
        style={{ display: 'none' }}
        {...register('archivo')}
      />
      <button 
        className={`w-20 ml-2 h-auto rounded flex justify-center items-center border-gray-300 border-2 bg-gray-50 `}
        onClick={handleClick}
      >
        { fileLabel }
      </button>
    </div>
  );
}

