import Login from '../components/Login';
import Logout from '../components/Logout';
import User from '../components/User';

export default function Home() {
  return (
    <div>
      <User />
      <Login />
      <Logout />
    </div>
  );
}
