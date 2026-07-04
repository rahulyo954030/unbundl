import "../../styles/Banner.css";

function Banner() {
  return (
    <div className="offer-banner">
      <p>
        Starting at <span className="old-price">Rs 69,999</span>{" "}
        <span className="new-price">Rs 47,999</span>. Hurry! Offer ends soon.
      </p>
    </div>
  );
}

export default Banner;