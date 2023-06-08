import React from 'react'
import { NavLink } from 'react-router-dom'
import "./DbEntities.css"

const DbEntities = () => {
  return (
    <div className='db__entities'>
      <nav>
        <ul>
          <li><NavLink to="/"  >Home</NavLink></li>
          <li><NavLink to="/shopall"  >Shop All</NavLink></li>
          <li><NavLink to="/contact"  >Contact</NavLink></li>
          <li><NavLink to="/admin/dbentities"  >Db Entities</NavLink></li>
        </ul>
      </nav>
      <div className="container">
        <h1>Entities</h1>
        <div className="container">
          <div className="card">
            <h4>Users</h4>
            <p>Dashboard for users</p>
            <NavLink to='/admin/users'>View Users</NavLink>
          </div>
          <div className="card">
            <h4>Categories</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>CartItems</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>OrderData</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>AddressDetails</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>OrderDetails</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>Products</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>ProductOrderDetails</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>Promotions</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>Review</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
          <div className="card">
            <h4>WishListItems</h4>
            <p>Dashboard for types of categories</p>
            <NavLink to='/admin/users'>View Categories</NavLink>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DbEntities
