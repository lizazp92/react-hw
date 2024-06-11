import { useState } from "react";
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import AdminPage from "./components/admin/AdminPage";

function App() {
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
      {/* if not logged in, handle login. if the role is admin, go to Admin page.
      otherwise landing page. and pass usernames to these pages*/}
      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : role === "admin1" ? (
        <AdminPage username={username} />
      ) : (
        <Landing username={username} />
      )}
    </div>
  );
}

export default App;
