import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Variables } from '../../Variables'
import { useNavigate } from "react-router-dom";


import { showWarningNotification, showSuccessNotification } from '../../NotificationUtils'
import "./ProfileSettings.css"

const ProfileSettings = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState("")
    useEffect(() => {
        if (!sessionStorage.getItem("jwtToken")) {
            showWarningNotification("You must be logged in to view profile", "You're being redirected to login!", 2000)
            setTimeout(() => { navigate("/login") }, 2000);
        }
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `user/UserInfo`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            var userInfo = response.data;
            setId(userInfo.id);
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
            setAddress(userInfo.address);
            setBirthday(userInfo.birthday);
            setEmail(userInfo.email)
            setUserName(userInfo.userName)
            setRole(userInfo.role)
        } catch (error) {
            showWarningNotification(error.response.data.errors[0], "", 2000)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(Variables.API_URL + `User/User`,
                {
                    id,
                    address,
                    userName,
                    email,
                    role
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                })
            showSuccessNotification("User is updated successfully!", "", 2000)
        } catch (error) {
            showWarningNotification("Error while updating user!", "", 2000)

        }
    };
    return (
        <>
            <Navbar />
            <div className="profile__settings__container">
                <div className='top__bar'>
                    <h2>Hey {firstName}</h2>
                    <NavLink
                        to="/my-orders" style={{ textDecoration: "none", color: "inherit" }}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <p>
                            My Orders
                        </p>
                    </NavLink>
                </div>
                <h2 className="title">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="input"
                            value={firstName}
                            disabled={true}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="input"
                            disabled={true}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="birthday">
                            Birthday
                        </label>
                        <input
                            type="datetime-local"
                            id="birthday"
                            className="input"
                            disabled={true}
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="input"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="userName">
                            Username
                        </label>
                        <input
                            type="text"
                            id="userName"
                            className="input"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {role === "Admin" && <div className="form-group">
                        <label className="label" htmlFor="role">
                            Role
                        </label>
                        <input
                            type="role"
                            id="role"
                            className="input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>}
                    <button type="submit" className="button">
                        Save Changes
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default ProfileSettings;