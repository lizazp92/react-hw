import UsersList from "./UsersList";
import "../../styles/AdminPage.scss";

function AdminPage({ username, darkMode }) {
  return (
    <div>
      <h1
        className={`AdminPage-title ${
          darkMode ? "AdminPage-title-dark-mode" : ""
        }`}
      >
        Admin page. Hello, {username}!
      </h1>
      <UsersList darkMode={darkMode} />
    </div>
  );
}

export default AdminPage;
