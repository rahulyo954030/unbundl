import "../styles/Hero.css";
import homeHero from "../assets/home_hero.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">

        <div className="hero-content">
          <h1>
            Invisible Aligners for a dream smile
          </h1>

          <p>
            Book a Scan and avail a free
            <br />
            Orthodontist Consult <span>worth ₹1500</span>
          </p>
        </div>

        <div className="hero-image-container">
          <img
            src={homeHero}
            alt="Smiling woman"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;