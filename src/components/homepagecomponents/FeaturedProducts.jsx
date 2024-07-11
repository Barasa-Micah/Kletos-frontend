import React, { useState, useEffect } from "react";
import axios from "axios";
import FPContainer from "./FPContainer";
import ProductDetails from "../../pages/ProductDetails";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/misc/featured-products");
        const featuredProducts = response.data.map(product => ({
          id: product.id,
          productName: product.name,
          imageSrc: product.image_url,
          description: product.description,
          price: product.price
        }));
        setProducts(featuredProducts);
      } catch (error) {
        console.error("Error fetching featured products", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleProductClick = (productId) => {
    // console.log("Selected Product ID:", productId); // Debugging statement
    setSelectedProductId(productId);
  };

  return (
    <div className="featured-products">
      <h3>Featured Products</h3>
      <div className="fp-div">
        {products.map((product, index) => (
          <FPContainer 
            key={index} 
            productDetails={product} 
            onProductClick={handleProductClick} 
          />
        ))}
      </div>
      {selectedProductId && (
        <ProductDetails id={selectedProductId} />
      )}
    </div>
  );
};

export default FeaturedProducts;
