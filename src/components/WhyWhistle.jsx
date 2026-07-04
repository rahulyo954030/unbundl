import "../styles/WhyWhistle.css";

import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

const features = [
  {
    image: feature1,
    title: "Custom-made & invisible",
    description:
      "Tailored for your teeth and smile with a clear, discreet appearance.",
  },
  {
    image: feature2,
    title: "Predictable results",
    description:
      "Advanced 3D modeling and AI-technology for precise planning and predictable results.",
  },
  {
    image: feature3,
    title: "Partnership with Clove Dental",
    description:
      "Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.",
  },
  {
    image: feature4,
    title: "Unlimited Aligners*",
    description:
      "Unlimited aligners and doctor consults at no extra cost.",
  },
];

function WhyWhistle() {
  return (
    <section className="why-whistle">

      <div className="why-container">

        <h2 className="why-title">
          Why Whistle?
        </h2>

        <div className="why-grid">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="why-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyWhistle;