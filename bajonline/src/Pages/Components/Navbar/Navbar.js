import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className='upper__part'>
                <input type='text' name='search' className='search' placeholder='Search...' />
                <h1 className='logo'><i>SmartSupplies.</i></h1>
                <div className='right__part'>
                    <div className='social__medias'>
                        <FacebookIcon sx={{ fontSize: '23px', padding: '0 5px' }} />
                        <InstagramIcon sx={{ fontSize: '23px', padding: '0 5px' }} />
                        <TwitterIcon sx={{ fontSize: '23px', padding: '0 5px' }} />
                        <LinkedInIcon sx={{ fontSize: '23px', padding: '0 5px' }} />
                    </div>
                    <div className='login'>
                        <LoginIcon />
                        <p>
                            Log In
                        </p>
                    </div>
                    <div className='shopping__cart'>
                        <ShoppingCartIcon />
                        <p>
                            Cart (0)
                        </p>
                    </div>
                </div>
            </div>
            {/* Ky eshte nje komment */}
            <div className='bottom__part'>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/shopall" activeClassName="active">Shop All</NavLink></li>
                    <li><NavLink exact to="/ourstory" activeClassName="active">Our Story</NavLink></li>
                    <li>Our Craft</li>
                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
