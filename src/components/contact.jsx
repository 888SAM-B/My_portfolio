import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMailSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("✓ Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult("✕ Failed to send message. Please try again or email directly.");
      }
    } catch {
      setResult("✕ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-block">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Have a question or want to work together? Send a message!</p>
      </div>

      <div className="contact-card">
        <form onSubmit={handleMailSubmit} className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="cname">Name</label>
              <input
                type="text"
                name="name"
                id="cname"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cmail">Email</label>
              <input
                type="email"
                name="email"
                id="cmail"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="comments">Message</label>
              <textarea
                name="message"
                id="comments"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {result && <p className="form-status">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
