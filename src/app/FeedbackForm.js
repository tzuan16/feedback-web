import React, { useState, useRef } from "react";
import axios from "axios";

const scriptUrl =
  "https://script.google.com/macros/s/AKfycbx025BDFvyDxm2a7bLKcTxDq7os966GCdXDk9I5fCBJi1P1RFyZw2GL0aC5yNpE8H3cpA/exec";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((json) => {
        {
          console.log(json);
          alert("SUCCESSFULLY SUBMITTED");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      style={{ display: "flex", flexDirection: "column", width: 300 }}
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email" style={{marginTop: 10}}>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message" style={{marginTop: 10}}>Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit" style={{marginTop: 20}}>Submit</button>
    </form>
  );
};

export default FeedbackForm;
