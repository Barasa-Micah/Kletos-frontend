import React, { useState } from 'react';
import axios from 'axios';
import "../../../css/myaccount/edit.css";

const Edit = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const fullName = `${formData.firstName} ${formData.lastName}`;
        const data = {
            full_name: fullName,
            email: formData.email,
        };

        try {
            const response = await axios.put('http://127.0.0.1:5000/profile/update', data, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setSuccess('Profile updated successfully');
        } catch (error) {
            setError(error.response.data.error || 'An error occurred while updating the profile');
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const data = {
            new_password: formData.password, // Assuming the old password is the current password for simplicity
            confirm_password: formData.confirmPassword,
        };

        try {
            const response = await axios.put('http://127.0.0.1:5000/profile/change-password', data, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setSuccess('Password changed successfully');
        } catch (error) {
            setError(error.response.data.error || 'An error occurred while changing the password');
        }
    };

    return (
        <div className="card1">
            <header className="header-edit">
                <a className="indx" href="">
                    <svg className="na" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </a>
                <h1 className="head-edit">Edit Info</h1>
            </header>
            <form id="editForm" className="form" onSubmit={handleUpdateProfile}>
                <div className="row">
                    <div className="fname">
                        <input
                            placeholder="Enter First Name"
                            required
                            className="fN"
                            type="text"
                            value={formData.firstName}
                            id="fN-firstName"
                            name="firstName"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-firstName">First Name</label>
                    </div>
                    <div className="lname">
                        <input
                            placeholder="Enter Last Name"
                            required
                            className="fN"
                            type="text"
                            value={formData.lastName}
                            id="fN-lastName"
                            name="lastName"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="lname">
                        <input
                            placeholder="Enter Your Email"
                            required
                            className="fN"
                            type="email"
                            value={formData.email}
                            id="fN-email"
                            name="email"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-email">Email</label>
                    </div>
                    <div className="wth">
                        <div className="gen-loc">
                            <select
                                required
                                className="location"
                                id="locid"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            >
                                <option value="1356">A.S.K. Showground/Wanye</option>
                                <option value="1189">Adams Arcade / Dagoretti Corner</option>
                                <option value="1201">Bahati / Marish / Viwandani / Jeri</option>
                                <option value="1540">Bomas/CUEA/Galleria</option>
                                <option value="1200">Buruburu / Hamza / Harambee</option>
                                <option value="1169">CBD - GPO/City Market/Nation Centre</option>
                                <option value="1168">CBD - KICC/Parliament/Kencom</option>
                                <option value="1171">CBD - Luthuli/Afya Centre/ R. Ngala</option>
                                <option value="1170">CBD - UON/Globe/Koja/River Road</option>
                                <option value="1545">City Stadium/Makongeni/Mbotela</option>
                                <option value="1486">Embakasi East-Pipeline/Transami/Airport North Rd</option>
                                <option value="998">Embakasi North - Dandora / Kariobangi North</option>
                                <option value="999">Embakasi South - Bunyala Road / South B</option>
                                <option value="1563">Embakasi South - Mombasa Road/Sameer Park/General Motors/ICD</option>
                                <option value="1558">Embakasi South-Landimawe/KwaReuben/Kware/Pipeline</option>
                                <option value="1510">Garden Estate/Thome/Marurui</option>
                                <option value="1541">Gigiri/Village market/UN</option>
                                <option value="1509">Githurai/Kahawa Sukari</option>
                                <option value="1543">Hurlingham/DOD/Yaya center</option>
                                <option value="1202">Huruma / Kiamaiko / Mbatini / Ngei</option>
                                <option value="1478">Imara Daima/AA/Maziwa/Kwa Njenga</option>
                                <option value="1204" selected>Kahawa Wendani/ Kenyatta University</option>
                                <option value="1455">Kahawa west/Githurai 44</option>
                                <option value="1517">Kamukunji - Airbase/Mlango Kubwa</option>
                                <option value="1518">Kamukunji - Eastleigh/California/Shauri Moyo</option>
                                <option value="1564">Kamulu</option>
                                <option value="1007">Karen</option>
                                <option value="1469">Kariobangi South/Dandora/Airbase</option>
                                <option value="1008">Kawangware/Stage 56</option>
                                <option value="1556">Kenyatta Road</option>
                                <option value="1561">Kikuyu/Ondiri/Zambezi</option>
                                <option value="1560">King’eero/Kinoo/ Muthiga</option>
                                <option value="1468">Komarock/Kayole Junction</option>
                                <option value="1009">Kawangware/Stage 56</option>
                                <option value="1010">Langata/Umash Funeral Home</option>
                                <option value="1458">Lavington</option>
                                <option value="1012">Madaraka/Strathmore University</option>
                                <option value="1177">Makadara</option>
                                <option value="1481">Mukuru kwa Ruben/Mukuru kwa Njenga</option>
                                <option value="1565">Mushroom Garden</option>
                                <option value="1172">Ngara/Parklands/Museum Hill</option>
                                <option value="1188">Nairobi West</option>
                                <option value="1186">Ngumo/Highrise</option>
                                <option value="1207">Ngumba/Garden City</option>
                                <option value="1547">Ruaka/Twiga Hill</option>
                                <option value="1191">Ridgeways/Choma Zone/coffee Garden</option>
                                <option value="1542">Riruta/Satelite</option>
                                <option value="1551">Ruiru</option>
                                <option value="1195">South C</option>
                                <option value="1562">SPY-K</option>
                                <option value="1476">South B</option>
                                <option value="1485">Umoja I/II/III/Kinyago</option>
                                <option value="1487">Utawala/Embakasi Garrison/Benedicta</option>
                                <option value="1502">Zimmerman</option>
                            </select>
                        </div>
                        <label className="lbl" htmlFor="locid">Location</label>
                    </div>
                </div>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <div className="button-container">
                    <button className="button-edit" type="submit">Update Profile</button>
                </div>
            </form>
            <form id="changePasswordForm" className="form" onSubmit={handleChangePassword}>
                <div className="row">
                    <div className="fname">
                        <input
                            placeholder="Enter New Password"
                            required
                            className="fN"
                            type="password"
                            value={formData.password}
                            id="fN-password"
                            name="password"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-password">New Password</label>
                    </div>
                    <div className="lname">
                        <input
                            placeholder="Confirm New Password"
                            required
                            className="fN"
                            type="password"
                            value={formData.confirmPassword}
                            id="fN-confirmPassword"
                            name="confirmPassword"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-confirmPassword">Confirm New Password</label>
                    </div>
                </div>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <div className="button-container">
                    <button className="button-edit" type="submit">Change Password</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
