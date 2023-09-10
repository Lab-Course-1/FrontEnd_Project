import React, { useState, useEffect } from 'react'
import { Variables } from '../../../../Variables';
import "./RecentOrders.css"
import axios from 'axios';

const RecentOrders = () => {
    const [recentOrders, setRecentOrders] = useState([]);
    const handleDetailsClick = function (orderId) {
        //todo:redirect to the order with that specific id
    }
    useEffect(() => {
        getRecentOrders()
    }, [])

    const getRecentOrders = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Order/RecentOrders`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );
            setRecentOrders(response.data);
        } catch (error) {
        }

    }
    return (
        <div className='recent__orders'>
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
                    {recentOrders.map(order => (
                        <tr key={order.orderId} className='table__row'>
                            <td>{order.orderId}</td>
                            <td>{order.orderPrice} €</td>
                            <td style={{ fontWeight: 700, color: order.orderStatus === 'Completed' ? '#097969' : (order.orderStatus === 'Approved' ? '#FDDA0D' : 'blue') }}>{order.orderStatus}</td>
                            <td><input type='button' value='Details' className='details__button' onClick={handleDetailsClick(order.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default RecentOrders