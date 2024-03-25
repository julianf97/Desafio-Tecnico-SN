import React from 'react';

export default function FileButtonsErrors({ errors, selectedFile }) {

  return (
    <div className='w-2/4 h-2 flex flex-col justify-center items-center max-sm:w-full max-sm:h-4 max-sm:ml-1 flex-grow'>
      {errors && errors.archivo ? (
        <span className="text-red-500 text-sm mt-2">{errors.archivo.message}</span>
      ) : (
        selectedFile && selectedFile[0] && (
          <span className="text-black text-sm mt-4">{selectedFile[0].name}</span>
        )
      )}
    </div>
  );
}
