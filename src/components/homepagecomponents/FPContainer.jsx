import React from "react";
import { Link } from "react-router-dom";
import "../../css/productdetails/productdetails.css";

const FPContainer = ({ productDetails, onProductClick }) => {
  return (
    <Link to={`/productdetails/${productDetails.id}`} className="product-link">
      <div className="fp-container" onClick={() => onProductClick(productDetails.id)}>
        <div className="fpc-image">
          <img src={productDetails.imageSrc} alt={productDetails.productName} />
        </div>
        <div className="fpc-details">
          <span className="product-name">{productDetails.productName}</span>
        </div>
      </div>
    </Link>
  );
};

export default FPContainer;
