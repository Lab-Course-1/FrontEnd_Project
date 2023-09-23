import React, { useState, useEffect } from 'react'
import SideNav from '../Components/SideNav/SideNav'
import { Variables } from '../../../Variables'
import axios from 'axios'
import StatisticCard from '../Components/StatisticCard/StatisticCard'
import "./Analytics.css"
const Analytics = () => {
  const [sales, setSales] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [newProducts, setNewProducts] = useState(0);
  useEffect(() => {
    getTotalSales();
    numberOfNewCustomers();
    numberOfOrders();
    numberOfNewProducts();
  }, []);

  const getTotalSales = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/GetTotalSales?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      setSales(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const numberOfNewCustomers = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NewCustomers?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      setNewCustomers(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const numberOfOrders = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `statistics/NumberOfOrders?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      setOrders(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const numberOfNewProducts = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Statistics/NumberOfProducts?sinceNumberOfDays=${365}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      })
      setNewProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  let salesStat = {
    icon: "analytics",
    mainText: "Number of sales",
    percentage: Math.round(sales / 20000 * 100),
    stat: sales + "€",
    date: "Last year",
  };
  let customersStat = {
    icon: "bar_chart",
    mainText: "New customers",
    percentage: Math.round(newCustomers / 500 * 100),
    stat: newCustomers,
    date: "Last year",
  };
  let ordersStat = {
    icon: "thumb_up",
    mainText: "Number of orders",
    percentage: Math.round(orders / 500 * 100),
    stat: orders,
    date: "Last year",
  };

  let productsStat = {
    icon: "analytics",
    mainText: "New products",
    percentage: Math.round(newProducts / 500 * 100),
    stat: newProducts,
    date: "Last year",
  };

  return (
    <div className="analytics">
      <SideNav />
      <div>
        <h1 class='title'>Analytics</h1>
        <p class='date'>Last 365 days</p>
        <div className="cards">
          <StatisticCard props={salesStat} />
          <StatisticCard props={customersStat} />
          <StatisticCard props={ordersStat} />
          <StatisticCard props={productsStat} />
        </div>
      </div>
    </div>
  )
}

export default Analytics