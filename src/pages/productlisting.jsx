import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../pages/components/productcard/productcard";
import { Frame } from "../pages/components/frame";
import { Frame2 } from "../pages/components/frame";
import "../css/productlistingcss/productlisting.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products/");
        // console.log("Fetched products data:", response.data); // Debug statement
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error); // Debug statement
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="product-list-page">
        <div className="div-2">
          <div>
            <Frame className="" />
            <Frame2 className="" />
          </div>
          <div className="divider1"></div>

          <div className="frame-2">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                productId={product.id}
                productName={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
          </div>

          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-5">1</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-5">2</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-5">3</div>
            </div>
            <div className="text-wrapper-6">....</div>
            <div className="frame-6">
              <div className="text-wrapper-5">4</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListing;
