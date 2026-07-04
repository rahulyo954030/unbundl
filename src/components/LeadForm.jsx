import "../styles/LeadForm.css";
import useContent from "./common/useContent";

function LeadForm() {
  const { data } = useContent(8);
  const content = data[1] || {};

  return (
    <section className="lead">
      <div className="lead-container">

        <h2>{content.title || "Do you have Teeth Gaps or Crooked Teeth?"}</h2>

        <div className="lead-radio">
          <label className="radio-item">
            <input type="radio" name="teeth" />
            <span className="radio-circle"></span>
            <span>Yes</span>
          </label>

          <label className="radio-item">
            <input type="radio" name="teeth" />
            <span className="radio-circle"></span>
            <span>No</span>
          </label>
        </div>

        <div className="lead-row">

          <div className="field">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Ajay Kumar"
            />
          </div>

          <div className="field">
            <input
              type="tel"
              placeholder="+91  Mobile number*"
            />
          </div>

          <button>
            Book a Free Scan
          </button>

        </div>

        <div className="consent">
          <input type="checkbox" />

          <p>{content.body || (
            <>I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.</>
          )}</p>
        </div>

      </div>
    </section>
  );
}

export default LeadForm;