import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Img, Heading, Text } from '../components/shoppingcartcomponent';
import ShoppingCartBracelet from '../components/shoppingcartcomponent/details';
import '../css/shoppingcartcss/shoppingcart.css';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

const ShoppingcartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 500.00, // Assuming constant shipping cost
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    // Fetch cart items from backend
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://127.0.0.1:5000/cart/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data); // Update state with fetched cart items

          // Calculate summary based on fetched items
          calculateSummary(data);

          // Fetch cart summary from backend
          const summaryResponse = await fetch('http://127.0.0.1:5000/cart/summary', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (summaryResponse.ok) {
            const summaryData = await summaryResponse.json();
            setSummary({
              subtotal: summaryData.subtotal.toFixed(2),
              shipping: summaryData.shipping.toFixed(2),
              discount: summaryData.discount.toFixed(2),
              total: summaryData.total.toFixed(2),
            });
          } else {
            console.error('Failed to fetch cart summary:', summaryResponse.statusText);
          }
        } else {
          console.error('Failed to fetch cart items:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to calculate summary values locally
  const calculateSummary = (items) => {
    const subtotal = items.reduce((total, item) => total + item.product_price * item.quantity, 0);
    const discount = subtotal * 0.0612;
    const total = subtotal + summary.shipping - discount;

    setSummary({
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toFixed(2),
    });
  };

  const handleDeleteItem = async (productId) => {
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
      setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
      calculateSummary(cartItems); // Recalculate summary after item deletion
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
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
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product_id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
      calculateSummary(cartItems); // Recalculate summary after updating quantity
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div>
        <NavBar />
      </div>
      <div className="containerA">
        <div className="fdiv">
          <Text size="textmd" as="p" className="text-stylingn dot">
            My Cart
          </Text>
          <Text size="texts" as="p" className="itms">
            {cartItems.length} items selected
          </Text>
        </div>
        <div className="divider"></div> {/* Divider line */}
        <div className="container2">
          <div className="container3">
            <div className="container4">
              {cartItems.map((item, index) => (
                <ShoppingCartBracelet
                  key={index}
                  productId={item.product_id} // Assuming this is the field for product ID
                  braceletoneimage={item.image_url}
                  bracelettwotext={item.product_name}
                  kescountertext={`Kes: ${item.product_price}`}
                  oneqtytext={`${item.quantity} qty`}
                  kescountertext1={`Kes. ${item.product_price * item.quantity}`} // Assuming total price per item
                  onDelete={handleDeleteItem}
                  onUpdate={handleUpdateQuantity}
                />
              ))}
            </div>
          </div>
          <div className="order-summ">
            <Heading as="h2">Order summary</Heading>
            <div className="div-sub">
              <div className="sub">
                <Text as="p">Subtotal</Text>
                <Text as="p">Kes: {summary.subtotal}</Text>
              </div>
              <div className="sub">
                <Text as="p">Shipping</Text>
                <Text as="p">Kes: {summary.shipping}</Text>
              </div>
              <div className="sub">
                <Text as="p">Discount (6.12%)</Text>
                <Text as="p">Kes: {summary.discount}</Text>
              </div>
              <div className="sub">
                <Heading size="headinglg" as="h3" className="self-end">
                  Total
                </Heading>
                <Heading size="headinglg" as="h4" className="cash">
                  Kes: {summary.total}
                </Heading>
              </div>
            </div>
            <Button
              rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" className="arrow-rght" />}
              className="payment"
            >
              Proceed to payment
            </Button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="Dis">
          <div className="discode">
            <Heading size="heading2xl" as="h1" className="txtheading">
              Discount code
            </Heading>
            <Button className="applybtn">Apply</Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShoppingcartPage;
