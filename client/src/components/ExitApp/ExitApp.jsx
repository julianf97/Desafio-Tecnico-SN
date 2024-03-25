import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function ExitApp() {
  const { setIsAdmin, setUserLogged } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('userLogged');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userId');
    localStorage.removeItem('formSend');

    setIsAdmin(false);
    setUserLogged(false);
  };

  return (
    <div className='h-full max-sm:w-28 w-40 self-end flex justify-center items-center'>
      <FontAwesomeIcon
        className='iconExit cursor-pointer'
        icon={faSignOutAlt}
        onClick={handleLogout}
      />
    </div>
  );
}
