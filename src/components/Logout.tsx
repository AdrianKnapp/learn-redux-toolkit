import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

function Logout() {
  const disptach = useDispatch();

  const handleLogout = () => {
    console.log('logout');
    disptach(logout());
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
