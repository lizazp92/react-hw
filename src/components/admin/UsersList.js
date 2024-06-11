import { useState } from "react";
import UserInfo from "./UserInfo";
import Button from "react-bootstrap/Button";

function UsersList() {
  const users = [
    {
      id: 1,
      username: "Kala",
      icon: "https://randomuser.me/api/portraits/women/17.jpg",
      group: "admin",
      isActive: true,
      lastVisit: "now",
    },
    {
      id: 2,
      username: "Kaja",
      icon: "https://randomuser.me/api/portraits/women/18.jpg",
      group: "user",
      isActive: false,
      lastVisit: "10.02.22",
    },
    {
      id: 3,
      username: "Poa",
      icon: "https://randomuser.me/api/portraits/women/20.jpg",
      group: "user",
      isActive: true,
      lastVisit: "now",
    },
    {
      id: 4,
      username: "Mait",
      icon: "https://randomuser.me/api/portraits/men/2.jpg",
      group: "user",
      isActive: true,
      lastVisit: "now",
    },
    {
      id: 5,
      username: "Opay",
      icon: "https://randomuser.me/api/portraits/men/8.jpg",
      group: "moderator",
      isActive: false,
      lastVisit: "25.10.24",
    },
    {
      id: 6,
      username: "Gauy",
      icon: "https://randomuser.me/api/portraits/men/12.jpg",
      group: "moderator",
      isActive: false,
      lastVisit: "03.12.21",
    },
    {
      id: 7,
      username: "Buayt",
      icon: "https://randomuser.me/api/portraits/women/1.jpg",
      group: "admin",
      isActive: true,
      lastVisit: "now",
    },
    {
      id: 8,
      username: "Opern",
      icon: "https://randomuser.me/api/portraits/men/4.jpg",
      group: "moderator",
      isActive: true,
      lastVisit: "now",
    },
  ];
  // filtering users by groups
  const [selectedUserGroup, setSelectedUserGroup] = useState("all");
  // filtering users by clicking on remove btn
  const [selectedUsers, setSelectedUsers] = useState(users);

  const groupFilterOnClick = (group) => {
    setSelectedUserGroup(group);
  };
  const usersFiltered =
    selectedUserGroup === "all"
      ? selectedUsers
      : selectedUsers.filter((user) => user.group === selectedUserGroup);

  const removeUserOnClick = (userId) => {
    setSelectedUsers((users) => users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <div
        id="buttons"
        className="d-flex flex-wrap justify-content-center gap-4 m-4"
      >
        <Button onClick={() => groupFilterOnClick("all")}>All</Button>
        <Button onClick={() => groupFilterOnClick("admin")}>Admin</Button>
        <Button onClick={() => groupFilterOnClick("user")}>User</Button>
        <Button onClick={() => groupFilterOnClick("moderator")}>
          Moderator
        </Button>
      </div>
      <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-4">
        {usersFiltered.map((user) => {
          console.log(user);
          return (
            <li key={user.id}>
              <UserInfo user={user} onDelete={removeUserOnClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
