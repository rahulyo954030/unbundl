import "../styles/Hero.css";
import homeHero from "../assets/home_hero.png";
import useContent from "./common/useContent";

function Hero() {
  const { data } = useContent(6);
  const content = data[0] || {};

  return (
    <section className="hero-section">
      <div className="hero-wrapper">

        <div className="hero-content">
          <h1>
            {content.title || "Invisible Aligners for a dream smile"}
          </h1>

          <p>
            {content.body || (
              <>
                Book a Scan and avail a free
                <br />
                Orthodontist Consult <span>worth ₹1500</span>
              </>
            )}
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