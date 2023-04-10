import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='upper__part'>
                <h2 className='logo'><i>SmartSupplies.</i></h2>
                <ul>
                    <li>Home</li>
                    <li>Shop All</li>
                    <li>Our Story</li>
                    <li>Our Craft</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Shipping & Returns</li>
                    <li>Store Policy</li>
                    <li>Payment methods</li>
                </ul>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
                <div className='email__div'>
                    <h2>Join Us!</h2>
                    <label>
                        Email:
                        <input type='text' name='email' className='email'/>
                    </label>
                    <button type='button' name='send' className='send'>Send</button>
                </div>
            </div>
            <p className='powered__by'>
                ©2023 by Albion, Blendion, Jeton. All rights reserved!
            </p>
        </footer>
    )
}

export default Footer