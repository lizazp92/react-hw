import UsersList from "./UsersList";

function AdminPage({ username }) {
  return (
    <div>
      <h1 className="text-center pt-3">Admin page. Hello, {username}!</h1>
      <UsersList />
    </div>
  );
}

export default AdminPage;
