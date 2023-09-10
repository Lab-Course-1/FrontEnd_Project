import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Variables } from '../../Variables'
import axios from 'axios'
import "./MyOrders.css"

const MyOrders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [orderList, setOrderList] = useState([]);
    const [noMoreOrders, setNoMoreOrders] = useState(false);

    useEffect(() => {
        getOrderList();
    }, []);

    const getOrderList = async () => {
        try {
            const response = await axios.get(
                Variables.API_URL + `Order/GetCustomerOrderHistory?page=${currentPage}&pageSize=${10}`,
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
        <>
            <Navbar />
            <div className="my__orders">
                <h1>My Orders</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Created On</th>
                            <th>Shipping Date</th>
                            <th>Order Total</th>
                            <th>Order Status</th>
                            <th>Promotion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.length > 0 &&
                            orderList.map((order) => (
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>{order.createdOn}</td>
                                    <td>{order.shippingDate.substring(0, 16) + "..."}</td>
                                    <td>{order.orderFinalPrice}€</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{order.promotion}</td>
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
            <Footer/>
        </>
    );

}

export default MyOrders