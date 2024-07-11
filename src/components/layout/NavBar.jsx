import "../../css/layoutcss/layout.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBell, FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleDropdown = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <h3>KLETOS</h3>
        </a>
      </div>

      <div className="mobile-view">
        <div
          className="mobile-bell-icon "
          onClick={(e) => setNotificationOpen(!notificationOpen)}
        >
          <FaBell />
          {notificationOpen && <NotificationMenu />}
        </div>
        <div className="mobile-cart-icon">
          <FaShoppingCart />
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars />
        </button>
      </div>

      <div className={`navbar-content ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/aboutus">About</a>
          </li>
          <li>
            <a href="/contactus">Contact</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <div className="dropdown">
            <button
              onClick={() => toggleDropdown(setCartOpen)}
              className="icon-button"
            >
              {cartOpen ? "close" : <FaShoppingCart />}
            </button>
            {cartOpen && (
              <div className="dropdown-content">
                <Link to="/shoppingcart">View Cart</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              onClick={(e) => setNotificationOpen(!notificationOpen)}
              className="icon-button"
            >
              {notificationOpen ? "close" : <FaBell />}
            </button>
            {notificationOpen && <NotificationMenu />}
            {notificationsOpen && (
              <div className="dropdown-content">
                <Link to="/notifications">All Notifications</Link>
                <a href="#">Mark All as Read</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              onClick={() => toggleDropdown(setProfileOpen)}
              className="icon-button"
            >
              {profileOpen ? "close" : <FaUser />}
            </button>
            {profileOpen && (
              <div className="dropdown-content">
                <Link to="/myaccount">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                <Link to="/settings">Settings</Link>
                <a href="#">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NotificationMenu = () => {
  const [notifications, setNotifications] = useState([
    {
      productName: "Ring",
      prodcutId: 1,
      timeStamp: "12am",
      imageSrc: "/ring.jpeg",
    },
    {
      productName: "Ring",
      prodcutId: 1,
      timeStamp: "12am",
      imageSrc: "/ring.jpeg",
    },
    {
      productName: "Ring",
      prodcutId: 1,
      timeStamp: "12am",
      imageSrc: "/ring.jpeg",
    },
  ]);

  return (
    <div className="notification-menu">
      <ul className="notf-cont">
        {notifications.map((a) => {
          return (
            <a href="#" className="notf-box">
              <div className="nb-image">
                <img src={a.imageSrc} />
              </div>
              <div className="nb-details">
                <h3>{a.productName}</h3>
                <p>{a.timeStamp}</p>
              </div>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
