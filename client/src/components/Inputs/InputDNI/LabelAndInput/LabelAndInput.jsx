import React from 'react';
import { dniValidationRules } from '../../../../inputsValidations/dniValidationRules';
import { dniLabel } from '../../../../constants/textConstants';

export default function LabelAndInput({ register, errors }) {
  return (
    <>
      <label htmlFor="input_dni" className="block text-sm max-sm:ml-1 self-start font-medium text-gray-900">
        { dniLabel }
      </label>
      <input 
        type="text" 
        id="input_dni" 
        {...register("dni", dniValidationRules)}
        inputMode="numeric"
        className={`rounded block max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:border-gray-600  dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300 ${errors && errors.dni ? "border-red-500" : ""}`}
        placeholder='Ingrese su DNI' 
      />
    </>
  );
}
