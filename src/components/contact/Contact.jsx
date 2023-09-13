import { RiInstagramLine } from "react-icons/ri";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_loa03mo",
      "template_0n1g87s",
      form.current,
      "377aev-GpsLi3vv6y"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abiodunalimot12@gmail.com</h5>
            <a href="mailto:abiodunalimat12@gmail.com" target="__blank">
              Email us
            </a>
          </article>

          <article className="contact__option">
            <RiInstagramLine className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@abiodunalimat7</h5>
            <a href="https://m.me/" target="__blank">
              DM me on IG
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2349132572943</h5>
            <a href="https://wa.me/+2349132572943" target="__blank">
              Whatsapp me
            </a>
          </article>
        </div>

        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message for me"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
