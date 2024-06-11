import { useState } from "react";
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import AdminPage from "./components/admin/AdminPage";

function App() {
  // state to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // state to manage user role (user, admin)
  const [role, setRole] = useState("");

  // function for setting roles
  const handleLogin = (username) => {
    setUsername(username);
    if (username === "admin") {
      setRole("admin");
    } else {
      setRole("user");
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* if not logged in, handle login. if the role is admin, go to Admin page.
      otherwise landing page */}
      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : role === "admin" ? (
        <AdminPage username={username} />
      ) : (
        <Landing username={username} />
      )}
    </div>
  );
}

export default App;
