import "../../styles/Header.scss";

function Header({ username, darkMode }) {
  return (
    <header className="Header">
      <h1
        className={`Header-title ${darkMode ? "Header-title-dark-mode" : ""}`}
      >
        Greeting App. Hello, {username}!
      </h1>
    </header>
  );
}

export default Header;

//todo: change header color and input bg on dark theme
// className={darkMode ? "dark-mode" : ""
// <Card className={`UserInfo-card ${darkMode ? "dark-mode" : ""}`}>
