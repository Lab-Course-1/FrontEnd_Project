import React from 'react';
import SideNav from '../Components/SideNav/SideNav';
import "./ProfileSettings.css";

const ProfileSettings = () => {
  return (
    <div>
      <SideNav />
      <div className='profile__page'>
        <div className='left__part'>
          <div className='general__info'>
            <h3>Profile Settings</h3>
            <ul className='general__list'>
              <li>
                <h2 className='button'>Geneal</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
