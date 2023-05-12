import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/\S+@\S+\.\S+/.test(event.target.value));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(!event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(!event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!message) {
      setMessageError(true);
    }
    if (!email || emailError) {
      setEmailError(true);
    }
    if (name && email && message && !emailError) {
      // write actual logic to get messages
      console.log("Submitting form with values:", name, email, message);
    }
  };

  const styles = {
    divMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    form:{
      margin: '100px',
    },
    div: {
      margin: "10px",
    }
  };

  return (
    <div style={styles.divMain}>
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.div}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {nameError && <p className="error-message">Please enter a name</p>}
      </div>
      <div style={styles.div}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && (
          <p className="error-message">Please enter a valid email</p>
        )}
      </div>
      <div style={styles.div}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} />
        {messageError && (
          <p className="error-message">Please enter a message</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
