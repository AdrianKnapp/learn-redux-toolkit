const Logout = () => {
  const handleLogout = () => {
    console.log('logout');
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout;