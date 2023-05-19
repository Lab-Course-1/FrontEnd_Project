import React from 'react'
import { NavLink } from 'react-router-dom'

const Users = () => {
  let users = ['albion', 'blendionn', 'jeton'] // todo: get users
  return (
    <div className='users entity'>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/shopall" activeClassName="active">Shop All</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/admin/dbentities" activeClassName="active">Db Entities</NavLink></li>
        </ul>
      </nav>
      <div class="container">
        <h1>Users</h1>
        <div class="add">
          <a href="addUser.php" class="button">Create User</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Pass</th>
              <th>Address</th>
              <th>Age</th>
              <th>Role</th>
              <th>Created</th>
              <th>DateCreated</th>
              <th class="change">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <a href="" class="edit__button btn">Edit</a>
                <a href="" class="delete__button btn">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users