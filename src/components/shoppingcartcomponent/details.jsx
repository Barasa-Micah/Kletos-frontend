import React, { useState } from "react";
import { Heading, Img } from "./";
import "../../css/shoppingcartcss/details.css";

const ShoppingCartBracelet = ({
  braceletoneimage,
  bracelettwotext,
  kescountertext,
  oneqtytext,
  kescountertext1,
  productId,
  onDelete,
  onUpdate,
  ...props
}) => {
  const [quantity, setQuantity] = useState(parseInt(oneqtytext.split(" ")[0]));

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateQuantity(newQuantity);
  };

  const handleDecrement = async () => {
    const newQuantity = quantity > 1 ? quantity - 1 : quantity;
    setQuantity(newQuantity);
    await updateQuantity(newQuantity);
  };

  const updateQuantity = async (newQuantity) => {
    try {
      const token = localStorage.getItem('token');
      await fetch('http://127.0.0.1:5000/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId, quantity: newQuantity }),
      });
      onUpdate(productId, newQuantity); // Update item quantity in UI after successful update
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch('http://127.0.0.1:5000/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId }),
      });
      onDelete(productId); // Remove item from UI after successful deletion
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  return (
    <div {...props} className={`${props.className} flex-container`}>
      <div className="flex-full">
        <Img src={braceletoneimage} alt="bracelet" className="image-cover" />
        <div className="flex-column-start">
          <div className="flex-start-between">
            <Heading as="h5" className="h5txt">
              {bracelettwotext}
            </Heading>
            <div className="imgcont" onClick={handleDelete}>
              <Img
                src="images/img_arrow_down.svg"
                alt="bracelet"
                className="arrw"
              />
            </div>
          </div>
          <Heading size="headings" as="p" className="kescountertext">
            {kescountertext}
          </Heading>
          <div className="bdy">
            <div className="divhead">
              <button onClick={handleDecrement} className="quantity-button">-</button>
              <Heading size="headingmd" as="h6" className="oneqtytext">
                {quantity} qty
              </Heading>
              <button onClick={handleIncrement} className="quantity-button">+</button>
            </div>
            <Heading as="h5" className="kescountertext1">
              {kescountertext1}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartBracelet;
