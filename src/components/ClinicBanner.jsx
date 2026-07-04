import "../styles/ClinicBanner.css";
import { ChevronDown } from "lucide-react";
import cloveLogo from "../assets/clove_logo.png";

function ClinicBanner() {
  return (
    <section className="clinic-banner">
      <div className="clinic-container">

        <div className="clinic-left">
          <h2>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a
            <br />
            Clove Dental Clinic near you.
          </h2>
        </div>

        <div className="clinic-right">
          <img
            src={cloveLogo}
            alt="Clove Dental"
            className="clinic-logo"
          />

          <button className="find-btn">
            <span>Find Clinic</span>
            <ChevronDown size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ClinicBanner;