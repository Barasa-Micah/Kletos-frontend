// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../../css/myaccount/myaccount.css";
import NavBar from "../layout/NavBar";

import AccountOverview from './subcomponents/myaccount';
import OrderHistory from './subcomponents/orderhistory';
import SavedItems from './subcomponents/wishlist';

const MyAccount = () => {
    const [activeLink, setActiveLink] = useState(1); // Default to "My Account"

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const handleAccountClick = () => {
        setActiveLink(1);
    };

    return (
        <div className="container1">
            <NavBar />
            <div className="side">
                <nav className="sidemenu" aria-labelledby="account-menu">
                    <a
                        href="#"
                        className={`eachpiece ${activeLink === 1 ? 'active' : ''}`}
                        id="account-menu"
                        onClick={handleAccountClick}
                    >
                        <svg className={`ic ${activeLink === 1 ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <div className={`name ${activeLink === 1 ? 'active' : ''}`}>My Account</div>
                    </a>
                    <a
                        href="#"
                        className={`eachpiece ${activeLink === 2 ? 'active' : ''}`}
                        onClick={() => handleLinkClick(2)}
                    >
                        <svg className={`ic ${activeLink === 2 ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z" />
                        </svg>
                        <div className={`name ${activeLink === 2 ? 'active' : ''}`}>Order History</div>
                    </a>
                    <a
                        href="#"
                        className={`eachpiece ${activeLink === 3 ? 'active' : ''}`}
                        onClick={() => handleLinkClick(3)}
                    >
                        <svg className={`ic ${activeLink === 3 ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                        </svg>
                        <div className={`name ${activeLink === 3 ? 'active' : ''}`}>My Wishlist</div>
                    </a>
                    <a
                        href="#"
                        className={`eachpiece ${activeLink === 4 ? 'active' : ''}`}
                        onClick={() => handleLinkClick(4)}
                    >
                        <svg className={`ic ${activeLink === 4 ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                        </svg>
                        <div className={`name ${activeLink === 4 ? 'active' : ''}`}>Vouchers</div>
                    </a>
                    <form method="get" className="btn-logout" action="">
                        <button className="btnLG">Logout</button>
                    </form>
                </nav>
            </div>

            {activeLink === 1 && <AccountOverview />}
            {activeLink === 2 && <OrderHistory />}
            {activeLink === 3 && <SavedItems />}
        </div>
    );
};

export default MyAccount;
