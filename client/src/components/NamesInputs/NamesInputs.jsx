import React from 'react';
import InputNameContainer from '../Inputs/InputName/InputNameContainer/InputNameContainer';
import LastNameInputContainer from '../Inputs/LastNameInput/LastNameInputContainer/LastNameInputContainer';

export default function NamesInputs({ register, errors }) {
  return (
    <div className='w-5/6 h-auto max-sm:mt-0 max-sm:ml-0 ml-2  flex justify-center max-sm:items-center max-sm:flex-col'>
      <InputNameContainer register={register} errors={errors} />
      <LastNameInputContainer register={register} errors={errors} />
    </div>
  );
}
