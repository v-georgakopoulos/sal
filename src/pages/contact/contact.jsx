import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import contactBanner from "../../assets/contact-images/contact-banner.jpg";
import "./contact.scss";

const defaultFormFields = {
  fullname: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullname, email, phone, message } = formFields;

  const form = useRef();

  const [termsAccepted, setTermsAccepted] = useState(false);
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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
          setFormFields(defaultFormFields);

          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setError(true);
          setSuccess(false);
          setLoading(false);

          setTimeout(() => setError(false), 3000);
        }
      );
  };



  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactBanner} alt="Brand Creator" />
      </div>
      <div className="contact-info">
        <div className="contact-details">
          <h1>LET’S STAY CONNECTED</h1>
          <h3>DESIGN STUDIO</h3>
          <p>
            24 Megalou Vasileiou Str Nea Smyrni 17122 Athens Greece
          </p>
          <p> +30 211 0041015 +30 6942536106</p>
          <h1 className="map-directions">37.9438°N23.7155°E</h1>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name*"
              name="fullname"
              value={fullname}
              onChange={onChangeHandler}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={onChangeHandler}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChangeHandler}
            />
            <textarea
              placeholder="Message*"
              name="message"
              value={message}
              onChange={onChangeHandler}
              required
            ></textarea>

            <div className="terms-container">
              <input
                type="checkbox"
                name="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="terms"
              />
              <span>
                I accept the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  terms & conditions
                </a>{" "}
                regarding intellectual property rights.
              </span>
            </div>

            <button type="submit" disabled={loading} className="form-button">
              {loading ? "Sending..." : "Send"}
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
      </div>
    </div>
  );
};

export default Contact;
