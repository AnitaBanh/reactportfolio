import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../styles/index.css';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Incorrect email format");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    alert(`Thank you for reaching out, ${name}.`);
  };
  return (
    
    <div>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Name "
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">ex: myemail@email.com</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message "
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
    {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

    //     <Form>
    //     <form className="form mb-3" controlId="formBasicEmail">
    //     <input
    //         value={name}
    //         name="name"
    //         onChange={handleInputChange}
    //         type="text"
    //         placeholder="full name"
    //       />
    //       <label>Email address</label>
    //       <input
    //         value={email}
    //         name="email"
    //         onChange={handleInputChange}
    //         type="email"
    //         placeholder="Enter email"
    //       />
    //         <input
    //         value={message}
    //         name="message"
    //         onChange={handleInputChange}
    //         type="text"
    //         placeholder="Enter your message"
    //       />
    //       <Button variant="primary" type="button" onClick={handleFormSubmit}>
    //         Submit
    //       </Button>
    //     </form>
    // {errorMessage && (
    //   <div>
    //     <p className="error-text">{errorMessage}</p>
    //   </div>
    // )}
  );
}
