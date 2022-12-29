import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7j5jo9x",
        "template_rfjhsak",
        form.current,
        "v8YqFVE_Ecepm6GUK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="category">
          <h>About</h>
          <p>Logitech Story</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Contact us</p>
        </div>
        <div className="category">
          <h>Values</h>
          <p>Social Impact</p>
          <p>Sustainability</p>
          <p>Recylcing</p>
          <p>Acesssibvility</p>
        </div>
        <div className="category">
          <h>Partners</h>
          <p>Affilate Program</p>
          <p>Influencer</p>
        </div>
        <div className="category">
          <h>Customers</h>
          <p>Return Policy</p>
          <p>Email Preferences</p>
          <p>Student Discount</p>
        </div>
      </div>
      <div className="footer-bot">
        <div className="social">
          <p className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </p>
        </div>
        <div className="contactMe">
          <form ref={form} onSubmit={sendEmail}>
            <div className="test">
              <input
                type="email"
                name="user_email"
                placeholder="your email address"
                className="email"
              />
              <input type="submit" value="Send" className="send"/>
            </div>
          </form>
        </div>
      </div>
      <div className="footer_footer">
        <div className="copyright">
          <p>©2022 Jonathan Kim. All rights reserved</p> |<p>Terms of Use</p> |
          <p>Web Privacy Policy</p> |<p>Product Privacy Policy</p> |
          <p>Cookie Settings</p> |<p>Sitemap</p>
        </div>
        <div>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
