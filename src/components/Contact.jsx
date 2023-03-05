import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="https://formspree.io/f/xbjeygyn"
            method="POST">
          <div>
            <label>Name</label>
            <input type="text" required name="username" placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required name="email"  placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              name="message"
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;