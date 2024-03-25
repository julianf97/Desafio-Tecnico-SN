import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputLastNameErrors from '../InputLastNameErrors/InputLastNameErrors';

export default function LastNameInputContainer({ register, errors }) {
  return (
    <div className='flex flex-col'>
      <LabelAndInput register={register} errors={errors}/>
      <InputLastNameErrors errors={errors}/>
    </div>
  );
}
