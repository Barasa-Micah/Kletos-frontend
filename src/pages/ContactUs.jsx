import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contactuscss/contactus.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hzoodee", "template_row8sqh", form.current, {
        publicKey: "VCqtjECoLMyOdHkJL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container">
      
      <div className="tittle">
        <h2>CONTACT US</h2>
      </div>
      <div className="paragraph">
        <p>
          Feel free to contact us any time.We will get back to you as soon as we
          can.
        </p>
      </div>
      <div className="image">
        <img src="/ring.jpeg" alt="" />
      </div>
      
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder=" Name" className="user_name" />

          <input type="email" placeholder=" Email" className="user_email" />

          <textarea className="message" placeholder="Message" />

          <button className="button">Send</button>
        </form>
      </div>
     
      <div className="details">
        <p>
          {/* Email: okola676@gmailcom. <br></br>
          Tel: +254757792010. */}
        </p>
      </div>
    </div>
  );
};

export default ContactUs