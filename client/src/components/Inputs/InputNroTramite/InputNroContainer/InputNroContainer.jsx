import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputNroErrors from '../InputNroErrors/InputNroErrors';

export default function InputNroContainer({ register, errors }) {
  return (
    <div className='flex flex-col'>
      <LabelAndInput register={register} errors={errors}/>
      <InputNroErrors errors={errors} />
    </div>
  );
}
