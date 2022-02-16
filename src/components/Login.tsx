import { useState } from "react";

const Login = () => {
  const [name, setName] = useState('');

  const handleLogin = () => {
    console.log(name)
  }

  return (
    <form>
      <h1>Login</h1>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login;