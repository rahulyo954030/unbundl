import "../../styles/Navbar.css";
import { Phone } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Whistle and Smile"
          />
        </div>

        <button className="call-btn">
          <Phone size={22} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;