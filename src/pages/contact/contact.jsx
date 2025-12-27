import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.scss"

const defaultFormFields = {
  fullname: "",
  email: "",
  telephone: "",
  message: "",
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullname, email, telephone, message } = formFields;

  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          // publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
          setFormFields(defaultFormFields);

          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
          setLoading(false);

          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      );
  };

  const onChangeHandler = (e) => {
    console.log(formFields);
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="contact-container">
      <h2>Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          name="fullname"
          value={fullname}
          onChange={onChangeHandler}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <input
          type="telephone"
          placeholder="Telephone"
          name="telephone"
          value={telephone}
          onChange={onChangeHandler}
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={onChangeHandler}
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Apply"}
        </button>
        {success && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {error && (
          <p className="error-message">
            Failed to send message. Please try again!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
