import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../css/myaccount/wishlist.css";

const SavedItems = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/wishlist/wishlist', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setWishlistItems(response.data);
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            }
        };

        fetchWishlistItems();
    }, []);

    const removeFromWishlist = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/wishlist/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Remove the item from local state
            setWishlistItems(wishlistItems.filter(item => item.product_id !== productId));
        } catch (error) {
            console.error('Error removing item from wishlist:', error);
        }
    };

    return (
        <div className="wishlist-container">
            <h2 className='wishlist-title'>Saved Items</h2>
            {wishlistItems.length > 0 ? (
                wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-item">
                        <div className="wishlist-summary">
                            <img src={item.product_image} alt={item.product_name} className="wishlist-image" />
                            <span>{item.product_name}</span>
                            <span>{item.product_price}</span>
                            <div className="wishlist-buttons">
                                <button className="wishlist-btn_buy">Buy Now</button>
                                <button className="wishlist-btn_remove" onClick={() => removeFromWishlist(item.product_id)}>
                                    <svg className='wishlist-bin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No saved items found.</p>
            )}
        </div>
    );
};

export default SavedItems;
