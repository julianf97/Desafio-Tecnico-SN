import React from 'react'
import { questionLogin, signUpLogin } from '../../constants/textConstants';
import { Link } from "react-router-dom"

export default function QuestionLogin() {
  return (
    <div className='w-full h-8 flex justify-center items-center pt-3'>
      <Link to={"/signup"}>
        { questionLogin } <span className='text-red-500 ml-1 cursor-pointer'>{ signUpLogin }</span>
      </Link>
    </div>
  )
}
