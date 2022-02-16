import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

function User() {
  const { name } = useSelector(selectUser);

  return (
    <div>
      <h1>
        Usuário:
        {name}
      </h1>
    </div>
  );
}

export default User;
