import React, { useState } from "react";
import "../styles/contact.scss";
import Swal from "sweetalert2";
const Contact = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Error, setError] = useState([]);
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FirstName != "" && LastName != "" && Email != "" && Message != "") {
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
      if (result.statusCode == 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        e.target.elements.FirstName.value = "";
        e.target.elements.LastName.value = "";
        e.target.elements.Email.value = "";
        e.target.elements.Message.value = "";
        Swal.fire({
          title: "Success",
          text: "Alert successful",
          icon: "success",
          confirmButtonText: "OK",
        });
        setError([]);
      } else {
        setError(result.errors);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Fill all the gaps",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
            name="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="text text-danger email">
            {Error.FirstName != undefined ? Error.FirstName[0] : ""}
          </p>
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="text text-danger email">
            {Error.LastName != undefined ? Error.LastName[0] : ""}
          </p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text text-danger email">
            {Error.email != undefined ? Error.email[0] : ""}
          </p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className="text text-danger email">
            {Error.Message != undefined ? Error.Message[0] : ""}
          </p>
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
