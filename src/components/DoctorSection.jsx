import "../styles/DoctorSection.css";
import doctorImage from "../assets/doctor.png";
import useContent from "./common/useContent";

function DoctorSection() {
  const { data } = useContent(12);
  const content = data[9] || {};

  return (
    <section className="doctor-section">
      <div className="doctor-container">

        {/* Left */}

        <div className="doctor-content">

          <h2>
            {content.title || (
              <>We are Doctor-led, not<br />direct-to-customers</>
            )}
          </h2>

          <p>{content.body || (
            <>We don't offer direct-to-customer invisible aligners. We treat you in a Clove Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.</>
          )}</p>

          <button className="doctor-btn">
            Get a Callback
          </button>

        </div>

        {/* Right */}

        <div className="doctor-image">
          <img
            src={doctorImage}
            alt="Doctor"
          />
        </div>

      </div>
    </section>
  );
}

export default DoctorSection;