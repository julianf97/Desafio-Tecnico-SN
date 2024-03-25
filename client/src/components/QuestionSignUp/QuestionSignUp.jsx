import React from 'react'
import { questionSignUp, loginSignUp } from '../../constants/textConstants';
import { Link } from "react-router-dom"

export default function QuestionSignUp() {
  return (
    <div className='w-full h-8 flex justify-center items-center pt-3'>
      <Link to={"/"}>
        { questionSignUp} <span className='text-red-500 ml-1 cursor-pointer'>{ loginSignUp }</span>
      </Link>
    </div>
  )
}
