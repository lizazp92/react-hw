import { useState } from "react";
import Button from "react-bootstrap/Button";
import Landing from "./components/landing/Landing";
import Footer from "./components/landing/Footer";
import Login from "./components/login/Login";
import AdminPage from "./components/admin/AdminPage";
import "./styles/App.scss";

function App() {
  // setting theme
  const [darkMode, setDarkMode] = useState(false);

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

  // state to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //state to pass username to admin/landing pages
  const [username, setUsername] = useState("");
  // state to manage user role (user, admin)
  const [role, setRole] = useState("");

  // function for setting roles
  const handleLogin = (username) => {
    setUsername(username);
    username === "admin1" ? setRole("admin1") : setRole("user1");
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Button onClick={toggleTheme} className="theme-toggle" variant="info">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      {/* if not logged in, handle login. if the role is admin, go to Admin page.
      otherwise landing page. and pass usernames to these pages*/}
      {!isLoggedIn ? (
        <div>
          <Login handleLogin={handleLogin} darkMode={darkMode} />
          <Footer />
        </div>
      ) : role === "admin1" ? (
        <div>
          <AdminPage username={username} darkMode={darkMode} />
          <Footer />
        </div>
      ) : (
        <Landing username={username} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
