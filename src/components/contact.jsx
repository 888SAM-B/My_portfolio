import React from "react";
import emailjs from "@emailjs/browser";
import { a } from "motion/react-client";


const Contact = () => {
  const [result, setResult] = React.useState("");
  const handleMailSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Mail Sent Successfully");
      
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <h2>Contact</h2>

      <div className="contact-container">
        <form onSubmit={handleMailSubmit}>
          
          <div className="form">

            <div className="one">
              <div className="contact-block">
                <label htmlFor="cname">Name :</label>
                <input
                  type="text"
                  name="name"
                  id="cname"
                  required
                />
              </div>

              <div className="contact-block">
                <label htmlFor="cmail">Mail :</label>
                <input
                  type="email"
                  name="email"
                  id="cmail"
                  required
                />
              </div>
            </div>

            <div className="two">
              <div className="contact-block">
                <label htmlFor="comments">Comments :</label>
                <textarea
                  name="message"
                  id="comments"
                  required
                />
              </div>
            </div>

          </div>

          <button type="submit" value="Submit" className="submit-btn" >Submit</button>
          <br />
          <span>{result}</span>
        </form>
      </div>
    </>
  );
};

export default Contact;
