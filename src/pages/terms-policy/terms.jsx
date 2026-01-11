import "./terms.scss";

const Terms = () => {
  return (
    <div className="terms-text">
      <h1>Terms of Use & Privacy Policy</h1>

      <div className="box-par">
        <h3>1. General</h3>
        <p>
          This website is owned by SAL Athens. By using the contact form or any
          services on this website, the user agrees to these terms of use.
        </p>
      </div>

      <div className="box-par">
        <h3>2. Contact Form</h3>
        <p>
          Through the contact form, the following information is collected:
        </p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Address</li>
          <li>Phone Number (optional)</li>
          <li>Message</li>
        </ul>
        <p>
          This information is used exclusively to communicate with the user and
          is not shared with third parties.
        </p>
      </div>

      <div className="box-par">
        <h3>3. Personal Data Protection (GDPR)</h3>
        <p>
          SAL Athens complies with the General Data Protection Regulation
          (GDPR). Collected data:
        </p>
        <ul>
          <li>is not stored in the website database</li>
          <li>is sent only via email</li>
          <li>is retained only as long as necessary for communication</li>
        </ul>
        <p>
          Users have the right to request deletion of their personal data at
          any time.
        </p>
      </div>

      <div className="box-par">
        <h3>4. Email Service</h3>
        <p>
          Messages are sent via EmailJS, which acts as an intermediary service
          for sending emails. EmailJS complies with European data protection
          standards.
        </p>
      </div>

      <div className="box-par">
        <h3>5. Intellectual Property</h3>
        <p>
          All website content, including text, images, and logos, is the
          intellectual property of SAL Athens and may not be reproduced or used
          without written permission.
        </p>
      </div>

      <div className="box-par">
        <h3>6. Contact</h3>
        <p>
          For any questions regarding personal data or these terms, please
          contact us at{" "}
          <a
            href="mailto:info@salathens.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@salathens.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;
