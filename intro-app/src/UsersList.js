import UserInfo from "./UserInfo";

function UsersList() {
  const users = [
    { id: 1, username: "Kala", isActive: true, lastVisit: "now" },
    { id: 2, username: "Kaja", isActive: false, lastVisit: "10.02.22" },
    { id: 3, username: "Poa", isActive: true, lastVisit: "now" },
    { id: 4, username: "Mait", isActive: true, lastVisit: "now" },
    { id: 5, username: "Opay", isActive: false, lastVisit: "25.10.24" },
    { id: 6, username: "Gauy", isActive: false, lastVisit: "03.12.21" },
    { id: 7, username: "Buayt", isActive: true, lastVisit: "now" },
    { id: 8, username: "Opern", isActive: true, lastVisit: "now" },
  ];

  const activeFalse = users.filter((user) => user.isActive === false);

  return (
    <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-4">
      {users.map((user) => (
        <li key={user.id}>
          <UserInfo user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
