import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from './../../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = ({ target }) => {
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setSubmitMessage(`${email} is not a valid email.`);
      return;
    } else if (!message) {
      setSubmitMessage(
        `Message cannot be empty`
      );
      return;
    } else if (!userName){
      setSubmitMessage(
        `Name cannot be empty`
      );
      return;
    }
    //save here? save at all?
    setSubmitMessage(`Contact Request Submited!`);
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h2 className='pageHeader'>Contact</h2>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder='Email:'
          />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder='Name:'
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
          rows="7"
          cols="60"
        />
        {submitMessage && (
          <div>
            <p className="submit-text">{submitMessage}</p>
          </div>
        )}
        <button type="button" className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
