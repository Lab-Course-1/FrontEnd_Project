import React from 'react';
import './Settings.css';
import Navbar from '../../Components/Navbar/Navbar';

const Settings = () => {
  return (
    <div>
      <Navbar />
      <div className='profile__page'>
        <div className='left__part'>
          <div className='general__info'>
            <h3 className='title__list'>Profile Settings</h3>
            <div className='content'>
              <ul className='general__list'>
                <li>
                  <h2 className='button'>General</h2>
                </li>
                <li>
                  <h2 className='button'>Moderators</h2>
                </li>
                <li>
                  <h2 className='button'>Admin Account</h2>
                </li>
                <li>
                  <h2 className='button'>SEO Settings</h2>
                </li>
                <li>
                  <h2 className='button'>Mail Settings</h2>
                </li>
                <li>
                  <h2 className='button'>Newsletter</h2>
                </li>
              </ul>
              <div className='user__info'>
                <div className="row">
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Surname' />
                </div>
                <div className="row">
                  <input type='text' placeholder='Email' />
                  <input type='text' placeholder='Phone' />
                </div>
                <input type='text' className='address' placeholder='Address' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
