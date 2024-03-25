import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputNameErrors from '../InputNameErrors/InputNamesErrors';

export default function InputNameContainer({ register, errors }) {
  return (
    <div className='max-sm:ml-0 flex flex-col'>
      <LabelAndInput register={register} errors={errors} />
      <InputNameErrors errors={errors}/>
    </div>
  );
}
