import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputErrorsEmail from '../../InputEmail/InputEmailErrors/InputEmailErrors';

export default function InputEmailContainer({ register, errors }) {
  return (
    <div className='max-sm:ml-0 flex flex-col'>
      <LabelAndInput register={register} errors={errors} />
      <InputErrorsEmail errors={errors}/>
    </div>
  );
}
