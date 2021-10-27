
import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
import "./Contact.css";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  init("user_BprWeoht3mLXWPFWcoKy2");
  const form = useRef();
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xdj784n",
        "template_dms8e7i",
        form.current,
        "user_BprWeoht3mLXWPFWcoKy2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    history.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-green-50 via-blue-100 to-indigo-50">

      <div className='bg-gradient-to-r from-green-50 via-blue-100 to-indigo-50'>
      <div className='some-text'>Get In Touch!</div>

      <div className='form-div'>
      <div className='form-input border-transparent focus:ring-2 focus:ring-purple-300'>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Name:' className='input'/>
     <br />
      <input type="email" name="from_email" placeholder='Email:' className='input'/>
     <br />
          <textarea name="message" placeholder='Message:' className='input'/>
          <br />
      <input type="submit" value="Send" className='sendbtn'  />
      </form>
        </div>
        </div>

      
      <div className='footer'>

       
        <div className='linkedin-div'>
        <a href='https://www.linkedin.com/in/esther-ryu-lee/' target='_blank'>
        <img src='https://i.imgur.com/n473TYn.png'
          alt='linkedin'
        id='linkedin'/>
          </a>
          </div>

        <div className='git-div'>
        <a href='https://github.com/eryulee' target='_blank'>
          <img src='https://i.imgur.com/v6qvRxk.png'
            alt='github'
          id='github' />
        </a>
        </div>

        </div>
        </div>
      </div>
  );
};

export default Contact;
