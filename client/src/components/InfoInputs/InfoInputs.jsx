import React from 'react';
import InputNroContainer from '../Inputs/InputNroTramite/InputNroContainer/InputNroContainer';
import InputDniContainer from '../Inputs/InputDNI/InputDniContainer/InputDniContainer';

export default function InfoInputs({ register, errors }) {
  return (
    <div className='w-5/6 h-auto max-sm:ml-0 ml-2 flex justify-center max-sm:items-center max-sm:flex-col'>
      <InputDniContainer register={register} errors={errors}/>
      <InputNroContainer register={register} errors={errors} />
    </div>
  );
}
