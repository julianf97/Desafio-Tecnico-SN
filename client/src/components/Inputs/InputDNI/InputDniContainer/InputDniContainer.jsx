import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputDniErrors from "../InputDniErrors/InputDniErrors"

export default function InputDniContainer({ register, errors }) {
  return (
    <div className='flex flex-col'>
      <LabelAndInput register={register} errors={errors}/>
      <InputDniErrors errors={errors} />
    </div>
  );
}
