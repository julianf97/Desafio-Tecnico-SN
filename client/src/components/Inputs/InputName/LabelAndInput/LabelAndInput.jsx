import React from 'react';
import { nameValidationRules } from '../../../../inputsValidations/nameValidationRules';
import { nameLabel } from '../../../../constants/textConstants';

export default function LabelAndInput({ register, errors }) {
  return (
    <>
      <label htmlFor="input_nombre" className="block text-sm max-sm:ml-1 self-start font-medium text-gray-900">
        { nameLabel }
      </label>
      <input 
        type="text" 
        id="input_nombre" 
        {...register("nombre", nameValidationRules)}
        className={`rounded block max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:border-gray-600  dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300 ${errors && errors.nombre  ? "border-red-500" : ""}`}
        placeholder='Ingrese su nombre' 
      />
    </>
  );
}
