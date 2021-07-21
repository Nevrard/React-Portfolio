import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './style.css';

import { checkMessage, validateEmail } from '../../utils/helpers';

const ContactInfo = () => {
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'Name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !Name) {
        setErrorMessage('Check Your Email or Name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      if (!checkMessage(Message)) {
        setErrorMessage(
          `Your Message cannot be empty`
        );
        return;
      }
      alert(`Dear ${Name}, Your Message was sent successfull, Will get back to You Shortly`);
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setMessage('');
      setEmail('');
    };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
        <div>
      <h1 className="title">Contact</h1>
      <form className="form">
        <label for="Name">First and Last Name</label>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your Name"
        />
        <label for="email">E-Mail</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
        />
        
        <label for="Message">Message</label>
        <textarea
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="Textarea"
          placeholder="Type your Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div className="error">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;