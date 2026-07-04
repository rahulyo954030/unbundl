import "../../styles/Footer.css";
import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import useContent from "../common/useContent";

function Footer() {
  const { data: fetched } = useContent(6);
  const short = (s, n = 3) => {
    if (!s) return null;
    return s.split(" ").slice(0, n).join(" ");
  };

  const h1 = short(fetched?.[0]?.title, 3) || "Quick Links";
  const h2 = short(fetched?.[1]?.title, 3) || "Get in Touch";
  const h3 = short(fetched?.[2]?.title, 2) || "Follow us";

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-column">
          <h3>{h1}</h3>

          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#scan">Book a Free Scan</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#aligners">Range of Aligners</a>
            <a href="#comparison">Aligners vs Braces</a>
            <a href="#faqs">FAQs</a>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>{h2}</h3>

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
          <h3>{h3}</h3>

          <div className="social-icons" aria-label="social links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
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