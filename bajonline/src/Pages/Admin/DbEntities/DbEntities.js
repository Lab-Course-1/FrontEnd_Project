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
            <h4>Orders</h4>
            <p>Dashboard for all the orders done</p>
            <a href="">View Orders</a>
          </div>
          <div className="card">
            <h4>Drinks</h4>
            <p>Dashboard for types of drinks</p>
            <a href="">View Drinks</a>
          </div>
          <div className="card">
            <h4>Staf</h4>
            <p>Dashboard for the staf</p>
            <a href="">View Staf</a>
          </div>
          <div className="card">
            <h4>Contact</h4>
            <p>Dashboard for the contacts</p>
            <a href="">View Contacts</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DbEntities