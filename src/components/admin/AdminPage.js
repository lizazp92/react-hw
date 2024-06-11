import UsersList from "./UsersList";

function AdminPage({ username }) {
  return (
    <div>
      <h1 className="text-center pt-3">hello, {username}!</h1>
      <UsersList />
    </div>
  );
}

export default AdminPage;
