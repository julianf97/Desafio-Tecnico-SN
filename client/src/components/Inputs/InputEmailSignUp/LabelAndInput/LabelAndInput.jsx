import React from 'react';
import { emailValidationRules } from '../../../../inputsValidations/emailValidationRules';
import { emailLabel } from '../../../../constants/textConstants';

export default function LabelAndInput({ register, errors }) {
  return (
    <>
      <label htmlFor="input_email" className="block text-sm max-sm:ml-1 self-start font-medium text-gray-900">
        { emailLabel }
      </label>
      <input 
        type="email" 
        id="input_email" 
        {...register("email", emailValidationRules)}
        className={`rounded block w-72 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:border-gray-600  dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300 ${errors && errors.email ? "border-red-500" : ""}`} 
        placeholder='Ingrese su email' 
      />
    </>
  );
}
