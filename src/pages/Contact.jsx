import React, { useState } from "react";
import "../styles/style.css"; // Ensure correct path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: value.includes("@") ? "" : "Please enter a valid email.",
      });
    }
    if (name === "message") {
      setErrors({
        ...errors,
        message: value.trim() === "" ? "Message cannot be blank." : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: formData.email.includes("@") ? "" : "Please enter a valid email.",
      message: formData.message.trim() === "" ? "Message cannot be blank." : "",
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.message) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="page-wrapper">
      <section className="contact" id="contact">
        <h3>Contact Me</h3>
        <div className="contact-nav">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;