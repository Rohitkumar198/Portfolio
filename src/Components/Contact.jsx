import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect API / EmailJS
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="sub-title">Contact Us</h2>

      <div className="contact-container">
        {/* Left Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>PHONE NUMBER</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group full">
              <label>WHAT DO YOU HAVE IN MIND</label>
              <textarea
                name="message"
                placeholder="Please enter query..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-box submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right Info Section */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Get in touch with us for any inquiries or collaborations. We’ll get
            back to you as soon as possible.
          </p>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+91 9919629082</span>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>rk7799804@gmail.com</span>
          </div>

          <div className="info-item">
            <i className="fas fa-location-dot"></i>
            <span>Mirzapur Uttar Pradesh 231306</span>
          </div>

          <div className="home-sci">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
