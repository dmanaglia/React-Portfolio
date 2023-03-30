import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';
import './contactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = ({ target }) => {
    const inputType = target.name;
    const inputValue = target.value;
    if(inputType === 'email') {
      setEmail(inputValue);
      setEmailError('');
    } else if(inputType === 'nameInput') {
      setName(inputValue);
      setNameError('');
    } else {
      setMessage(inputValue);
      setMessageError('');
    }
  };

  const nameValidation = () => {
    if(!name){
      setNameError('Name is required');
    }
  }

  const emailValidation = () => {
    if(!email){
      setEmailError('Email is required');
    } else if(!validateEmail(email)) {
      setEmailError(`${email} is not a valid email.`);
    }
  }

  const messageValidation = () => {
    if(!message){
      setMessageError('Message is required')
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    nameValidation();
    emailValidation();
    messageValidation();
    if(!nameError && !emailError && !messageError) {
      //save here? save at all?
      setSubmitMessage(`Contact Request Submited!`);
      setName('');
      setMessage('');
      setEmail('');
    }
  };

  return (
    <div className='mainPage'>
      <h2 className='pageHeader'>Contact</h2>
      <form className="form col-md-6 col-11">

        <div className='form-floating mb-3'>
          <input id='myNameInput' className="form-control" value={name} name="nameInput" onChange={handleInputChange} onBlur={nameValidation} type="text" placeholder='Enter name here'/>
          <label htmlFor="myNameInput">Name</label>
          <p className='errorMessage'>{nameError}</p>
        </div>

        <div className='form-floating mb-3'>
          <input id="myEmailInput" className="form-control" value={email} name="email" onChange={handleInputChange} onBlur={emailValidation} type="email" placeholder='Email:'/>
          <label htmlFor="myEmailInput">Email</label>
          <p className='errorMessage'>{emailError}</p>
        </div>

        <div className='form-floating mb-3'>
          <textarea id="myTextArea" className="form-control" value={message} name="message" onChange={handleInputChange} onBlur={messageValidation} placeholder="Leave a message here"/>
          <label htmlFor="myTextArea">Message</label>
          <p className='errorMessage'>{messageError}</p>
        </div>

        {submitMessage && (
          <div>
            <p className="confirmMessage">{submitMessage}</p>
          </div>
        )}
        <button type="button" className='btn btn-secondary' onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
