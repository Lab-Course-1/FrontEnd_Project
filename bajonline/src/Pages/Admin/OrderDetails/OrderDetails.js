import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from "../../../Variables";
import { useNavigate, useParams } from "react-router-dom";
import "./OrderDetails.css";
import SideNav from "../Components/SideNav/SideNav";
import { showSuccessNotification, showWarningNotification } from "../../../NotificationUtils";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState('')
  const [newStatus, setNewStatus] = useState('');
  const possibleStatuses = ['Created', 'Verified', 'Completed'];

  useEffect(() => {
    getOrder();
  }, []);

  const handleStatusChange = async () => {
    if (newStatus == order.orderStatus) {
      showWarningNotification("The status must be different from how it was", "", 2000)
      return;
    }
    const response = await axios.post(Variables.API_URL + `Order/ChangeOrderStatus?orderId=${id}&status=${newStatus}`, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
      },
    });

    if (response.status === 200) {
      showSuccessNotification("The order status has been updated successfully!", "", 2000);
    }
    else {
      showWarningNotification("Something happened, the order status couldn't be changed!", "", 2000)
    }

    getOrder()
  };

  const getOrder = async () => {
    try {
      const response = await axios.get(Variables.API_URL + `Order/GetOrder?orderId=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      });
      setOrder(response.data)
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  return (
    <div className="order__details">
      <SideNav />
      {order.orderId !== undefined &&
        <div className="order-details-container">
          <h2>Order Details</h2>
          <div className="order-info">
            <p>Order ID: <b>{order.orderId}</b></p>
            <p>Order Date: <b>{order.createdOn}</b></p>
            <p>Shipping Date: <b>{order.shippingDate}</b></p>
            <p>Total Price:<b> {order.orderPrice} €</b></p>
            <p>Order Status: <b style={{ color: order.orderStatus === 'Completed' ? '#097969' : (order.orderStatus === 'Verified' ? '#FDDA0D' : 'blue') }}>{order.orderStatus}</b></p>
            <div className="status-change">
              <h3>Change Order Status</h3>
              <select value={newStatus === '' ? order.Status : newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                {possibleStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <button className="change__status" onClick={handleStatusChange}>Change Status</button>
            </div>
          </div>
          <div className="shipping-info">
            <div className="shipping-info">
              <h3>Shipping Address</h3>
              <p>Name: <b>{order.name}</b></p>
              <p>Phone Number: <b>{order.phoneNumber}</b></p>
              <p>Street Address: <b>{order.streetAddress}</b></p>
              <p>City: <b>{order.city}</b></p>
              <p>Country: <b>{order.country}</b></p>
              <p>Postal Code: <b>{order.postalCode}</b></p>
            </div>
          </div>
        </div>
      }
    </div>

  )
};

export default OrderDetails;
