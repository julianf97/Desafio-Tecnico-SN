import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputErrorsEmail from '../InputPasswordErrors/InputsPasswordErrors';

export default function InputPasswordContainer({ register, errors }) {
  return (
    <div className='max-sm:ml-0 flex flex-col max-sm:mt-3'>
      <LabelAndInput register={register} errors={errors} />
      <InputErrorsEmail errors={errors}/>
    </div>
  );
}
