import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Variables } from '../../../Variables';
import { showWarningNotification, showSuccessNotification } from '../../../NotificationUtils';

import "./CreateOrder.css"

const CreateOrder = () => {
    const navigate = useNavigate();
    const [cartContent, setCartContent] = useState([]);

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState("");
    const [country, setCountry] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [promotion, setPromotion] = useState("")

    useEffect(() => {
        if (!sessionStorage.getItem("jwtToken")) {
            showWarningNotification("You must be logged in to create order", "You're being redirected to login!", 2000)
            setTimeout(() => { navigate("/login") }, 2000);
        }
        setPromotion(sessionStorage.getItem("promotion"))
        getCartContent();
    }, [])

    const getCartContent = () => {
        axios
            .get(Variables.API_URL + "ShoppingCart/ShoppingCartContent", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                },
            })
            .then((response) => {
                setCartContent(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = async (event) => {
        if (phoneNumber.length === 0 || name.length === 0 || streetAddress.length === 0 || city.length === 0 || country.length === 0 || email.length === 0){
            showWarningNotification("Please fill all fields!", "Enter valid data.", 2000)
            return;
        }
        event.preventDefault();
        try {
            const response = await axios.post(Variables.API_URL + `Order/CreateOrderFromShoppingCard${promotion && promotion !== "" ? `?promoCode=${promotion}` : ""}`,
                {
                    phoneNumber,
                    name,
                    streetAddress,
                    city,
                    country,
                    postalCode,
                    email
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                })
            var data = response.data;
            console.log(data)
            if (response.status === 200){
                showSuccessNotification(response.data, "", 2000)
            }
        } catch (error) {
            showWarningNotification("Order couldn't be created, please try again!", "", 2000)
        }
    };

    return (
        <>
            <Navbar />
            <div className='create__order'>
                <div className='left__side'>
                    <div className='top__bar'>
                        <h2>Shipping Details</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label className="label" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder='First name'
                                className="input"
                                onChange={(e) => setName(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                placeholder='Phone number'
                                className="input"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="country">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                placeholder='City'
                                className="input"
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="country">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="input"
                                placeholder='Country'
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="streetAddress">
                                StreetAddress
                            </label>
                            <input
                                type="text"
                                id="streetAddress"
                                className="input"
                                placeholder='Street address'
                                onChange={(e) => setStreetAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="postalCode">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                id="postalCode"
                                className="input"
                                placeholder='Postal code'
                                onChange={(e) => setPostalCode(e.target.value)}
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
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                </div>
                <div className='right__side'>
                    <div className='top__bar'>
                        <h2>Order Details</h2>
                    </div>
                    <div className="option">
                        <span className="option__label">Nëntotali: </span>
                        <span className="option__value">{cartContent.cartTotal} €</span>
                    </div>
                    <div className="option">
                        <span className="option__label">Duke përfshirë zbritjen: </span>
                        <span className="option__value">{0} €</span>
                    </div>
                    <div className="option">
                        <span className="option__label">Gjithsej çmimi: </span>
                        <span className="option__value">{cartContent.cartTotal} €</span>
                    </div>
                    <div>
                        <button type="submit" title="Create order" onClick={handleSubmit} className="button">
                            Create Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateOrder