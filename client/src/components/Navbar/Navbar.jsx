import React from 'react';
import LogoSN from '../../components/LogoSN/LogoSN';
import WhiteLine from '../WhiteLine/WhiteLine';
import LoupeContainer from '../LoupeContainer/LoupeContainer';
import TitleNavbar from '../TitleNavbar/TitleNavbar';
import { UserContext } from '../../context/userContext';
import ExitApp from '../ExitApp/ExitApp';

export default function Navbar() {

  const { userLogged } = React.useContext(UserContext);

  return (
    <div className='w-full flex h-20 bg-red-400 shadow-xl fixed top-0 z-150'>
      <LogoSN />
      <WhiteLine />
      <LoupeContainer />
      <TitleNavbar />
      {
        userLogged ? 
        <>
          <div className="flex-grow" />
          <ExitApp/>
        </> 
        : <span/>
      }
    </div>
  );
}
