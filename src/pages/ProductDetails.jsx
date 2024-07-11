import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../css/productdetails/productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/products/${id}`,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("User not authenticated");
        return;
      }

      await axios.post(
        "http://localhost:5000/cart/add",
        {
          product_id: id,
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart", error);
      setMessage("Error adding item to cart");
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("User not authenticated");
        return;
      }
  
      // console.log("Token:", token); // Log token to ensure it's retrieved correctly
  
      const response = await axios.post(
        "http://localhost:5000/wishlist/",
        { product_id: id }, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // console.log("Response:", response); // Log the response from the server
  
      setMessage("Item added to wishlist successfully");
    } catch (error) {
      console.error("Error adding item to wishlist", error);
      setMessage("Error adding item to wishlist");
  
      // console.log("Request config:", error.config); // Log the request config to inspect headers and data
      // console.log("Response status:", error.response.status); // Log the response status code
      // console.log("Response data:", error.response.data); // Log the response data for more details
    }
  };
  

  return (
    <>
      <NavBar />
      <div className="product-details">
        {product && (
          <div className="pd-cont">
            <section className="pd-image-cont">
              <img src={product.image_url} alt={product.name} />
            </section>
            <section className="pd-details">
              <h1>{product.name}</h1>
              <h2>
                PRICE: <span>{product.price}</span>
              </h2>
              <p>{product.description}</p>
              <div className="button-container">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button className="wishlist-button" onClick={handleAddToWishlist}>Add to Wishlist</button>
              </div>
              {message && <p>{message}</p>}
            </section>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
