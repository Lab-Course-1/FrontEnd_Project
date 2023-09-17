import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Variables } from '../../../../Variables';
import "./SimpleAnalytics.css"

const SimpleAnalytics = () => {
    const [dayBeforeYesterdayOrders, setDayBeforeYesterdayOrders] = useState(0.0);
    const [dayBeforeYesterdayProducts, setDayBeforeYesterdayProducts] = useState(0.0);
    const [dayBeforeYesterdayCustomers, setDayBeforeYesterdayCustomers] = useState(0.0);

    const [yesterdayOrders, setYesterdayOrders] = useState(0.0);
    const [yesterdayProducts, setYesterdayProducts] = useState(0.0);
    const [yesterdayCustomers, setYesterdayCustomers] = useState(0.0);

    const [ordersPercentage, setOrdersPercentage] = useState(0.0);
    const [productsPercentage, setProductsPercentage] = useState(0.0);
    const [customersPercentage, setCustomersPercentage] = useState(0.0);

    useEffect(() => {
        getYesterdayCustomers()
        getYesterdayOrders();
        getYesterdayProducts();
        getDayBeforeYesterdayCustomers();
        getDayBeforeYesterdayOrders()
        getDayBeforeYesterdayProducts();
        calculatePercentages()
    }, [])

    const getDayBeforeYesterdayOrders = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfOrders?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayOrders(response.data - yesterdayOrders)
        } catch (error) {
        }
    }


    const getDayBeforeYesterdayProducts = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayProducts(response.data - yesterdayProducts)
        } catch (error) {
        }
    }

    const getDayBeforeYesterdayCustomers = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NewCustomers?sinceNumberOfDays=2`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setDayBeforeYesterdayCustomers(response.data - yesterdayCustomers)

        } catch (error) {
        }
    }

    const getYesterdayOrders = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfOrders?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayOrders(response.data)
        } catch (error) {
        }
    }

    const getYesterdayProducts = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayProducts(response.data)
        } catch (error) {
        }
    }
    const getYesterdayCustomers = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Statistics/NewCustomers?sinceNumberOfDays=1`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setYesterdayCustomers(response.data)

        } catch (error) {
        }
    }

    const calculatePercentages = () => {
        console.log("adsfasdf")
        console.log(yesterdayOrders)
        console.log(dayBeforeYesterdayOrders)

        setOrdersPercentage((yesterdayOrders - dayBeforeYesterdayOrders) / (dayBeforeYesterdayOrders * 100))
        setCustomersPercentage((yesterdayCustomers - dayBeforeYesterdayCustomers) / (dayBeforeYesterdayCustomers * 100))
        setProductsPercentage((yesterdayProducts - dayBeforeYesterdayProducts) / (dayBeforeYesterdayProducts * 100))
    }
    return (
        <div className='simple__analytics'>
            <div className='orders analytic' title='Show More'>
                <div className='order__logo__container'>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </div>
                <div className='description'>
                    <p>ORDERS MADE</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: ordersPercentage < 0 ? "darkred" : "green" }} className='percentage'>{ordersPercentage}%</p>
                <p className='total'>{yesterdayOrders}</p>
            </div>
            <div className='new__products analytic' title='Show More'>
                <div className='products__logo__container'>
                    <span className="material-symbols-outlined">
                        inventory
                    </span>
                </div>
                <div className='description'>
                    <p>NEW PRODUCTS</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: productsPercentage < 0 ? "darkred" : "green" }} className='percentage'>{productsPercentage}%</p>
                <p className='total'>{yesterdayProducts}</p>
            </div>
            <div className='new__customers analytic' title='Show More'>
                <div className='customers__logo__container'>
                    <span className="material-symbols-outlined">
                        person_add
                    </span>
                </div>
                <div className='description'>
                    <p>NEW CUSTOMERS</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: customersPercentage < 0 ? "darkred" : "green" }} className='percentage'>{customersPercentage}%</p>
                <p className='total'>{yesterdayCustomers}</p>
            </div>
        </div>
    )
}

export default SimpleAnalytics