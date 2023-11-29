import React, { Component, useState } from "react";
import "../styles/contact.scss";

const Contact = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:7297/api/HelpMessage", {
      method: "POST",
      body: JSON.stringify({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        message: Message,
        helpMessageTypeId: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <section className="content container">
      <div className="header">
        <h4>Contact Us</h4>
        <p>We're here to help</p>
      </div>
      <form onSubmit={handleSubmit} className="inputs-form">
        <div>
          <label htmlFor="firstname">Name</label>
          <input
            type="text"
            id="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <span style="font-size: 14px !important; color: red !important"></span> */}
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <span style="font-size: 14px !important; color: red !important"></span> */}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <span style="font-size: 14px !important; color: red !important"></span> */}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {/* <span style="font-size: 14px !important; color: red !important"></span> */}
        </div>
        <div className="submit-sec">
          <h6>
            Please enter the details of your request. We thank you for getting
            in touch.
          </h6>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
