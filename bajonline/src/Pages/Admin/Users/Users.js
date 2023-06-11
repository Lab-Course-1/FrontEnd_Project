import React, { useState } from "react";
import "./Users.css";
import SimpleNavbar from "../DbEntities/Navbar/SimpleNavbar";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      firstName: "Albion",
      lastName: "Paqarizi",
      email: "albion@example.com",
      address: "Dragobil",
      birthday: "1990-01-01",
      userName: "albion123",
      createdOn: "2023-05-10",
      role: "User",
    },
    {
      id: "2",
      firstName: "Bledion",
      lastName: "Krasniqi",
      email: "bledion@example.com",
      address: "Terpeze e poshtme",
      birthday: "1995-02-02",
      userName: "bledion456",
      createdOn: "2023-06-18",
      role: "User",
    },
    {
      id: "3",
      firstName: "Jeton",
      lastName: "Sllamniku",
      email: "jeton@example.com",
      address: "Henc",
      birthday: "2000-03-03",
      userName: "jeton789",
      createdOn: "2023-06-05",
      role: "User",
    },
  ]);

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="users__entity">
      <SimpleNavbar />
      <div className="container">
        <h1>Users</h1>
        <div className="add">
          <a href="./users" className="button">
            Create User
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Username</th>
              <th>Created On</th>
              <th>Role</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.birthday}</td>
                <td>{user.userName}</td>
                <td>{user.createdOn}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button
                    className="delete__button btn"
                    onClick={() => handleDeleteUser(index)}
                  >
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
