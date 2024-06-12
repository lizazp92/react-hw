import UsersList from "./UsersList";
import "../../styles/Admin.scss";

function Admin({ username, darkMode }) {
  return (
    <div>
      <h1 className={`Admin-title ${darkMode ? "Admin-title-dark-mode" : ""}`}>
        Admin page. Hello, {username}!
      </h1>
      <UsersList darkMode={darkMode} />
    </div>
  );
}

export default Admin;
