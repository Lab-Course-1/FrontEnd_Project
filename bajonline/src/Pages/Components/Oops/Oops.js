import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import "./Oops.css"
const Oops = () => {
    return (
        <div className="oops-container">
            <h1 className='website'>SmartSupplies</h1>
            <h1 className="oops-title">Oops - 404 error </h1>
            <img className="oops-image" src="https://i.imgur.com/qIufhof.png" alt="Oops" />
            <p className="oops-text">We couldn't find the page you were looking for!</p>
            <a className="oops-link" href="/">Back to Home</a>
        </div>
    )
}

export default Oops