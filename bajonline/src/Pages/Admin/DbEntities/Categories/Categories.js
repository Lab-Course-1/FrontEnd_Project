import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Liber',
      description: 'Libri nga Naim frasheri',
      createdOn: '2023-05-10',
    },
    {
      id: 2,
      name: 'Fletore',
      description: 'Fletore nga adel',
      createdOn: '2023-06-18',
    },
    {
      id: 3,
      name: 'Kimik',
      description: 'Kimik nga schneider',
      createdOn: '2023-06-05',
    },
  ]);

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <div className='categories__entity'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to='/shopall' activeClassName='active'>Shop All</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/admin/dbentities' activeClassName='active'>Db Entities</NavLink>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <h1>Categories</h1>
        <div className='add'>
          <a href='./categories' className='button'>
            Create Category
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Created On</th>
              <th className='change'>Change</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.createdOn}</td>
                <td>
                  <button className='edit__button btn'>Edit</button>
                  <button className='delete__button btn' onClick={() => handleDeleteCategory(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
