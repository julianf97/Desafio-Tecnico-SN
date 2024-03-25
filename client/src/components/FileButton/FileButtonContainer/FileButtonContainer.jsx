import React from 'react';
import LabelAndButton from "../LabelAndButton/LabelAndButton"
import FileButtonErrors from '../FileButtonErrors/FileButtonsErrors';

export default function FileButtonContainer({ register, errors, selectedFile }) {
  return (
    <>
      <div className='w-5/6 flex-col flex justify-center items-center max-sm:pt-3 pb-3'>
        <LabelAndButton register={register}/>
        <FileButtonErrors errors={errors} selectedFile={selectedFile}/>
      </div>
    </>
  );
}
