import React from 'react'
import "./RecentOrders.css"

const RecentOrders = () => {
    const orders = [{ id: '00123', productName: 'T-shirt', productId: '1001', payment: '20.00', status: 'Completed' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Completed' }, { id: '00123', productName: 'T-shirt', productId: '1001', payment: '20.00', status: 'Verified' }, { id: '00123', productName: 'T-shirt', productId: '1001', payment: '20.00', status: 'Shipped' }, { id: '00123', productName: 'T-shirt', productId: '1001', payment: '20.00', status: 'Shipped' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Approved' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Approved' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Approved' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Approved' }, { id: '00124', productName: 'Hoodie', productId: '1002', payment: '35.00', status: 'Approved' }]
    console.log(`color:${orders[0].status === 'Completed' ? 'green' : (orders[0].status === 'Approved' ? 'yellow' : 'red')}`)
    const handleDetailsClick = function(orderId){
        //todo:redirect to the order with that specific id
    }
    return (
        <div className='recent__orders'>
            <table >
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className='table__row'>
                            <td>{order.id}</td>
                            <td>{order.productName}</td>
                            <td>{order.productId}</td>
                            <td>{order.payment} €</td>
                            <td style={{fontWeight: 700, color: order.status === 'Completed' ? '#097969' : (order.status === 'Approved' ? '#FDDA0D' : 'blue')}}>{order.status}</td>
                            <td><input type='button' value='Details' className='details__button' onClick={handleDetailsClick(order.id)}/></td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div >
    )
}

export default RecentOrders