import React, { useRef, useState } from 'react';
import './contact.css';
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t5acdnu', 'template_m26k7wb', form.current, 'VCPdYaR05yBJiXIAY')
      .then(
        (result) => {
          console.log('SUCCESS!', result);
          e.target.reset();
          setMessageStatus('Message is successfully sent');
        },
        (error) => {
          console.error('FAILED...', error);
          setMessageStatus('Failed to send message, please try again later');
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:dummyemail@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>dummy_me</h5>
            <a href='https://m.me/ernest.achiever' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+13213213215</h5>
            <a href='https://api.whatsapp.com/send?phone=13213213215' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='text' name='email' placeholder='Your email' required />
          <textarea name='message' rows='7' placeholder='Your message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {messageStatus && <p>{messageStatus}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
