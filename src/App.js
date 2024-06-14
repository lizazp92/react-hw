import { useState } from "react";
import Button from "react-bootstrap/Button";
import Landing from "./components/landing/Landing";
import Footer from "./components/landing/Footer";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import Register from "./components/register/Register";

import "./styles/App.scss";

function App() {
  // state to darkMode
  const [darkMode, setDarkMode] = useState(false);
  // state to manage login status (logged in - true/false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //state to pass username to admin/landing pages
  const [username, setUsername] = useState("");
  // state to manage user role (user, admin)
  const [role, setRole] = useState("");
  //state to show register component. default is showing login page
  const [showRegister, setShowRegister] = useState(false);
  //for showing registered username(from form in Register.js) in Header component (Main)
  const [registeredUsername, setRegisteredUsername] = useState("");

  //for button toggling dark theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // I added class to the body because otherwise only div's bg color would change
  // I'm so not sure if that's an ok approach
  if (darkMode) {
    document.body.classList.add("App-dark-theme");
  } else {
    document.body.classList.remove("App-dark-theme");
  }

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleShowLogin = () => {
    setShowRegister(false);
  };

  // function for setting roles
  const handleLogin = (username) => {
    setUsername(username);
    username === "admin1" ? setRole("admin1") : setRole("user1");
    setIsLoggedIn(true);
  };

  //pass registered username to role user1 to show Landing page with data from form (username)
  const handleRegister = (username) => {
    setRegisteredUsername(username);
    setRole("user1");
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Button
        onClick={toggleTheme}
        className="App-btn-theme-toggle"
        variant="info"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      {/* if not logged in, handle login and rendering register component onclick. if the role is admin, go to Admin page.
      otherwise landing page. and pass usernames to these pages*/}
      {!isLoggedIn ? (
        showRegister ? (
          <div>
            <Register
              handleShowLogin={handleShowLogin}
              darkMode={darkMode}
              handleRegister={handleRegister}
            />
            <Footer />
          </div>
        ) : (
          <div>
            <Login
              handleLogin={handleLogin}
              handleShowRegister={handleShowRegister}
              darkMode={darkMode}
            />
            <Footer />
          </div>
        )
      ) : role === "admin1" ? (
        <div>
          <Admin username={username} darkMode={darkMode} />
          <Footer />
        </div>
      ) : (
        <Landing username={registeredUsername} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
