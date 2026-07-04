import "../../styles/Navbar.css";
import { Phone } from "lucide-react";
import logo from "../../assets/logo.png";
import useContent from "../common/useContent";

function Navbar() {
  const { data } = useContent(3);
  const alt = data?.[0]?.title || "Whistle and Smile";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt={alt} />
        </div>

        <button className="call-btn">
          <Phone size={22} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;