import "../../styles/Footer.css";
import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#scan">Book a Free Scan</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#aligners">Range of Aligners</a>
          <a href="#comparison">Aligners vs Braces</a>
          <a href="#faqs">FAQs</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Get in Touch Now!</h3>

          <div className="contact-row">
            <Phone size={18} />
            <span>011-6932-8350</span>
          </div>

          <div className="contact-row">
            <Mail size={18} />
            <span>support@whistle.in</span>
          </div>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>Follow us on</h3>

          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Policies */}
        <div className="footer-column footer-policy">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;