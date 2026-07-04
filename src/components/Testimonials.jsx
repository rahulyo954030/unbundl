import "../styles/Testimonials.css";
import happySmilers from "../assets/testimonials.png";
import useContent from "./common/useContent";

function Testimonials() {
  const { data } = useContent(12);
  const content = data[10] || {};

  return (
    <section className="testimonial-section">

      <div className="testimonial-container">

        <h2>{content.title || "Happy Smilers!"}</h2>

        <div className="testimonial-image">

          <img src={happySmilers} alt="Happy Smilers" />

        </div>

        {content.body && <p className="testimonial-intro">{content.body}</p>}

      </div>

    </section>
  );
}

export default Testimonials;