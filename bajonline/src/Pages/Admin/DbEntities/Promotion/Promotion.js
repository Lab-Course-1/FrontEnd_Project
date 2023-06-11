import React, { useState } from 'react';
import './Promotion.css';
import SimpleNavbar from '../Navbar/SimpleNavbar';

const Promotions = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: 'Black-Friday',
      startDate: '2023-06-01',
      endDate: '2023-06-30',
      discountAmount: 10.0,
      isActive: true,
    },
    {
      id: 2,
      name: 'Eid-Mubarak',
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      discountAmount: 15.0,
      isActive: false,
    },

  ]);

  const handleDeletePromotion = (id) => {
    const updatedPromotions = promotions.filter((promotion) => promotion.id !== id);
    setPromotions(updatedPromotions);
  };

  return (
    <div className="promotions__entity">
      <SimpleNavbar/>
      <div className="container">
        <h1>Promotions</h1>
        <div className="add">
          <a href="./promotion" className="button">
            Create Promotion
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Discount Amount</th>
              <th>Active</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion) => (
              <tr key={promotion.id}>
                <td>{promotion.id}</td>
                <td>{promotion.name}</td>
                <td>{promotion.startDate}</td>
                <td>{promotion.endDate}</td>
                <td>{promotion.discountAmount}%</td>
                <td>{promotion.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <button className="edit__button btn">Edit</button>
                  <button className="delete__button btn" onClick={() => handleDeletePromotion(promotion.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Promotions;
