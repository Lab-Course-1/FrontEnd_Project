import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
            <div className='bottom__part'>
                <ul>
                    <li className='home'>Home</li>
                    <li className='shop__all'>Shop All</li>
                    <li className='our__story'>Our Story</li>
                    <li className='our__craft'>Our Craft</li>
                    <li className='contact'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar