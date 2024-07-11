import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../css/myaccount/orderhistory.css";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/orders/user_orders/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const fetchedOrders = response.data.map(order => ({
                    id: order.id,
                    date: order.created_at.split('T')[0],
                    status: order.status,
                    totalPrice: order.total_price,
                    products: order.products.map(product => ({
                        image: product.image_url,
                        name: product.name,
                        price: product.price,
                        details: product.description,
                        stock: product.stock,
                        quantity: product.quantity
                    }))
                }));

                setOrders(fetchedOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const toggleOrderDetails = (index) => {
        setExpandedOrderIndex(expandedOrderIndex === index ? null : index);
    };

    return (
        <div className="order-history">
            <h2 className='ord'>Order History</h2>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={order.id} className="order-item">
                        <div className="order-summary">
                            <img src={order.products[0]?.image} alt={`Product ${order.products[0]?.name}`} className="order-image" />
                            <span>{order.date}</span>
                            <span>Total: {order.totalPrice.toFixed(2)}</span>
                            <span>Status: {order.status}</span>
                            <button onClick={() => toggleOrderDetails(index)} className="details-button">
                                {expandedOrderIndex === index ? '▲' : '▼'}
                            </button>
                        </div>
                        {expandedOrderIndex === index && (
                            <div className="order-details">
                                {order.products.map((product, productIndex) => (
                                    <div key={productIndex} className="product-item">
                                        <div className="product-summary">
                                            <img src={product.image} alt={`Product ${product.name}`} className="product-image" />
                                            <span><strong>Name:</strong> {product.name}</span>
                                            <span><strong>Quantity:</strong> {product.quantity}</span>
                                            <span><strong>Price:</strong> {product.price.toFixed(2)}</span>
                                            <p><strong>Details:</strong> {product.details}</p>
                                            <p><strong>Stock:</strong> {product.stock}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default OrderHistory;
