import React, { useState, useEffect } from "react";
import { Variables } from "../../../Variables";
import axios from "axios";
import "../DbEntities/Entity.css";
import SimpleNavbar from "../DbEntities/Navbar/SimpleNavbar";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [noMoreUsers, setNoMoreUsers] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `user/Users?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newUsers = response.data;
      if (newUsers.length === 0) {
        setNoMoreUsers(true);
      }
      if (currentPage === 1) {
        setUserList(newUsers);
      } else {
        setUserList((prevUsers) => [...prevUsers, ...newUsers]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `User/User?id=${id}`
      );
      setUserList((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <SimpleNavbar />
      <div className="entity__container">
        <h1>Users</h1>
        <div className="add">
          <a href="AddUser" className="button">
            Create User
          </a>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birthday</th>
              <th>Address</th>
              <th>Username</th>
              <th>Created on</th>
              <th>Email</th>
              <th>Role</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 &&
              userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.birthday.substring(0, 16)+"..."}</td>
                  <td>{user.address}</td>
                  <td>{user.userName}</td>
                  <td>{user.createdOn.substring(0, 16)+"..."}</td>
                  <td>{user.email.substring(0, 16)+"..."}</td>
                  <td>{user.role}</td>
                  <td>
                    <a
                      href={`edituser/${user.id}`}
                      className="edit__button btn"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDeleteUser(user.id)}
                      className="delete__button btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!noMoreUsers && (
          <button type="button" className="load__more" onClick={getUserList}>
            Load More
          </button>
        )}
        {noMoreUsers && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </>
  );
};

export default Users;
