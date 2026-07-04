import "../styles/ClinicBanner.css";
import { ChevronDown } from "lucide-react";
import cloveLogo from "../assets/clove_logo.png";
import useContent from "./common/useContent";

function ClinicBanner() {
  const { data } = useContent(8);
  const content = data[2] || {};

  return (
    <section className="clinic-banner">
      <div className="clinic-container">

        <div className="clinic-left">
          <h2>
            {content.title || (
              <>Book a Free 3D Teeth Scan and Orthodontist Consult in a<br />Clove Dental Clinic near you.</>
            )}
          </h2>
        </div>

        <div className="clinic-right">
          <img
            src={cloveLogo}
            alt="Clove Dental"
            className="clinic-logo"
          />

          <button className="find-btn">
            <span>{content.body ? "Find Clinic" : "Find Clinic"}</span>
            <ChevronDown size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ClinicBanner;