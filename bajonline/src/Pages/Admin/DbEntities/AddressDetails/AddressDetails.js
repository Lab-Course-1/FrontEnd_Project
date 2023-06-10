import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AddressDetails.css';

const AddressDetails = () => {
  const [addressDetails, setAddressDetails] = useState([
    {
      userId: 1,
      phoneNumber: '049123456',
      streetAddress: 'rruga.',
      city: 'Malisheve',
      country: 'Kosove',
      postalCode: '24000',
      name: 'Albion',
      email: 'Albion@example.com',
      createdOn: '2023-06-10',
    },
    {
      userId: 2,
      phoneNumber: '049111111',
      streetAddress: 'rruga.',
      city: 'Malisheve',
      country: 'Kosove',
      postalCode: '24000',
      name: 'Bledion',
      email: 'Bledion@example.com',
      createdOn: '2023-06-11',
    },
  ]);

  const handleDeleteAddress = (index) => {
    const updatedAddressDetails = [...addressDetails];
    updatedAddressDetails.splice(index, 1);
    setAddressDetails(updatedAddressDetails);
  };

  return (
    <div className="addressDetails__entity">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopall" activeClassName="active">
              Shop All
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dbentities" activeClassName="active">
              Db Entities
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1>Address Details</h1>
        <div className="add">
          <a href="./addressdetails" className="button">
            Create Address
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Phone Number</th>
              <th>Street Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created On</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {addressDetails.map((address, index) => (
              <tr key={index}>
                <td>{address.userId}</td>
                <td>{address.phoneNumber}</td>
                <td>{address.streetAddress}</td>
                <td>{address.city}</td>
                <td>{address.country}</td>
                <td>{address.postalCode}</td>
                <td>{address.name}</td>
                <td>{address.email}</td>
                <td>{address.createdOn}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button
                    className="delete__button btn"
                    onClick={() => handleDeleteAddress(index)}
                  >
                    Delete
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

export default AddressDetails;
