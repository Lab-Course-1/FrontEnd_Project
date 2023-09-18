import React, { useState, useEffect } from 'react'
import SideNav from '../Components/SideNav/SideNav';
import axios from 'axios';
import { Variables } from '../../../Variables';
import "./Orders.css"

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const [noMoreOrders, setNoMoreOrders] = useState(false);
  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Order/GetOrders?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newOrders = response.data;
      console.log(newOrders)
      if (newOrders.length === 0) {
        setNoMoreOrders(true);
      }
      if (currentPage === 1) {
        setOrderList(newOrders);
      } else {
        setOrderList((prevOrders) => [...prevOrders, ...newOrders]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='orders'>
      <SideNav />
      <div className='orders__table'>
        <h1>Orders</h1>
        <table >
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map(order => (
              <tr key={order.orderId} className='table__row'>
                <td>{order.orderId}</td>
                <td>{order.orderPrice} €</td>
                <td style={{ fontWeight: 700, color: order.orderStatus === 'Completed' ? '#097969' : (order.orderStatus === 'Verified' ? '#FDDA0D' : 'blue') }}>{order.orderStatus}</td>
                <td><a
                  href={`order-details/${order.orderId}`}
                  className="edit__button btn"
                ><input type='button' value='Details' className='details__button' /></a></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!noMoreOrders && (
          <button type="button" className="load__more" onClick={getOrderList}>
            Load More
          </button>
        )}
        {noMoreOrders && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </div>
  )
}


export default Orders;