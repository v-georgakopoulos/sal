import "./terms.scss";

const Terms = () => {
  return (
    <div className="terms-text">
      <h1>Terms of Use & Privacy Policy</h1>
      <div className="box-par">
        <h3>1. General</h3>
        <p>
          This website is owned by SAL Athens. By using the contact form, the
          user accepts these terms.
        </p>
      </div>
      <div className="box-par">
        <h3>2. Contact Form</h3>
        <p>
          Through the contact form, the following information is collected: Full
          Name, Email, Address, Phone Number (optional), Message.The information
          is used exclusively to communicate with the user and is not shared
          with third parties.
        </p>
      </div>
      <div className="box-par">
        <h3>3. Personal Data Protection (GDPR)</h3>
        <p>
          The company complies with the General Data Protection Regulation
          (GDPR). The data: is not stored in the website database is sent only
          via email is retained only as long as necessary for communication.
          Users may request the deletion of their data at any time.
        </p>
      </div>
      <div className="box-par">
        <h3>4. Email Service</h3>
        <p>
          Messages are sent via EmailJS, which acts as an intermediary service
          for sending emails and complies with European data protection
          standards.
        </p>
      </div>
      <div className="box-par">
        <h3>5. Intellectual Property</h3>
        <p>
          All website content (text, images, logos) is the intellectual property
          of SAL Athens and cannot be reproduced or used without written
          permission.
        </p>
      </div>
      <div className="box-par">
        <h3>6. Contact</h3>
        <p>
          For any matters regarding personal data or these terms, you can
          contact{" "}
          <a href="mailto:info@salathens.com">info@salathens.com</a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
