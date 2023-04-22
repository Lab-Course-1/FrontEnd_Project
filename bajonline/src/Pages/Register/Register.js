import React, { useState } from 'react'
import "./Register.css"
import { Variables } from "../../Variables"

import axios from 'axios';

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async (event) => {
    if (email !== confirmEmail){
      console.log("email and confirm email are not the same");
      //todo - make dynamic
    }
    event.preventDefault();

    try {
      const response = await axios.post(Variables.API_URL + 'UserRegistration/register', {
        firstName: firstName,
        lastName: lastName,
        dob: birthDate,
        address: address,
        email: email,
        userName: userName,
        password: password
      });
      const token = response.data.token;
      console.log("token: " + token)
      // Do something with the JWT token, such as storing it in local storage
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the login process
    }
    // Do something after the user has registered, such as redirecting to a new page
  };

  return (
    <div className='register__container'>
      <h1 className='website'>SmartSupplies</h1>
      <div className='register__page'>
        <div className="register">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <input type="date" name="birthDate" id="birthDate" placeholder="Birthday" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
            <input type="text" name="address" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="username" name="username" placeholder="UserName" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <input type="email" name="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="email" name="confirmEmail" placeholder="Confirm Email" id="confirmEmail" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
            <input type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="register__button" id="submit" name="submit">Register</button>
            <p className="error"></p>
            <p>
              Have an account? <a href="/login"><b>Login Instead</b></a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register