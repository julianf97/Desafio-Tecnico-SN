import React from 'react';
import passwordValidationRules from "../../../../inputsValidations/passwordValidationRules.js" 
import { passwordLabel } from '../../../../constants/textConstants';

export default function LabelAndInput({ register, errors }) {
  return (
    <>
      <label htmlFor="input_password" className="block text-sm max-sm:ml-1 self-start font-medium text-gray-900">
        { passwordLabel }
      </label>
      <input 
        type="password" 
        id="input_password" 
        {...register("password", passwordValidationRules)}
        className={`rounded block max-sm:ml-1 w-72 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:border-gray-600  dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300 ${errors && errors.email ? "border-red-500" : ""}`} 
        placeholder='Ingrese su contraseña' 
      />
    </>
  );
}
