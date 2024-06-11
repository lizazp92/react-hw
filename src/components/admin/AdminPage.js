import UsersList from "./UsersList";

function AdminPage({ username, darkMode }) {
  return (
    <div>
      <h1 className="text-center pt-3">Admin page. Hello, {username}!</h1>
      <UsersList darkMode={darkMode} />
    </div>
  );
}

export default AdminPage;
