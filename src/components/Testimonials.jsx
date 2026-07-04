import "../styles/Testimonials.css";
import happySmilers from "../assets/testimonials.png";

function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-container">

        <h2>Happy Smilers!</h2>

        <div className="testimonial-image">

          <img
            src={happySmilers}
            alt="Happy Smilers"
          />

        </div>

      </div>

    </section>
  );
}

export default Testimonials;