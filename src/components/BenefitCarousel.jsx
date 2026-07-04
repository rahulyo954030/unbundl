import "../styles/BenefitCarousel.css";

const benefits = [
  {
    text: "Our inaugural launch benefit",
    bold: "Free teeth scan",
    value: "worth ₹500",
  },
  {
    text: "",
    bold: "Free orthodontic consultation",
    value: "worth ₹1500",
  },
  {
    text: "Our inaugural launch benefit",
    bold: "Free teeth scan",
    value: "worth ₹500",
  },
  {
    text: "",
    bold: "Free orthodontic consultation",
    value: "worth ₹1500",
  },
];

function BenefitCarousel() {
  return (
    <section className="benefit-bar">
      <div className="container-2xl">
        <div className="marquee">

        {/* First Set */}
        <div className="marquee-content">
          {benefits.map((item, index) => (
            <div className="benefit-item" key={index}>
              {item.text && <span>{item.text}</span>}
              <strong>{item.bold}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Duplicate Set for Infinite Loop */}
        <div className="marquee-content">
          {benefits.map((item, index) => (
            <div className="benefit-item" key={`copy-${index}`}>
              {item.text && <span>{item.text}</span>}
              <strong>{item.bold}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}

export default BenefitCarousel;