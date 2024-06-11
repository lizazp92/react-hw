function Header({ username, darkmode }) {
  return (
    <header className="Header">
      <h1 className="Header-title">Greeting App. Hello, {username}!</h1>
    </header>
  );
}

export default Header;

//todo: change header color and input bg on dark theme
