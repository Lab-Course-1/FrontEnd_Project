import React, { useState, useEffect } from 'react'
import { Variables } from '../../../../Variables';
import "./RecentOrders.css"
import axios from 'axios';

const RecentOrders = () => {
    const [recentOrders, setRecentOrders] = useState([]);

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
                            <td>{order.orderFinalPrice} €</td>
                            <td style={{ fontWeight: 700, color: order.orderStatus === 'Completed' ? '#097969' : (order.orderStatus === 'Verified' ? '#FDDA0D' : 'blue') }}>{order.orderStatus}</td>
                            <td><a
                                href={`order-details/${order.orderId}`}
                                className="edit__button btn"
                            ><input type='button' value='Details' className='details__button' /></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default RecentOrders