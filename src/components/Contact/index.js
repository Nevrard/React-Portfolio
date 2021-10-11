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
        <MDBCol md="7" className="text-center">
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
        <MDBCol md="5" className="text-center">
        <h1 className="title">Skills</h1>
        <div className="skills">
          <h4 className="title"> <span role="img">💻</span>Languages  and tools:</h4>
            <img alt="html" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
            <img alt="html" src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/MongoDB-00000F?style=for-the-badge&logo=MongoDB&logoColor=white"/>
        
          <h4 className="title"> <span role="img">🚀</span>Frameworks Known:</h4>   

          <img alt="html" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
            <img alt="html" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/> 
            <img alt="html" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> 
        
          <h4 className="title"> <span role="img">🚀</span>IDE's Known:</h4>  
        
        </div>
        
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;