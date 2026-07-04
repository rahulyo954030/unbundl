import "../styles/WhistleDifference.css";
import useContent from "./common/useContent";
import differenceImage from "../assets/whistle-difference.png";

// Use your SVG icons from Figma
import nextGenIcon from "../assets/next-gen.png";
import hassleFreeIcon from "../assets/hassle-free.png";
import pricingIcon from "../assets/pricing.png";

const items = [
  {
    icon: nextGenIcon,
    title: "Next-Gen",
    description:
      "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.",
  },
  {
    icon: hassleFreeIcon,
    title: "Hassle-Free",
    description:
      "Predictable, comfortable & lifestyle-friendly for an easy smile transformation.",
  },
  {
    icon: pricingIcon,
    title: "Transparent Pricing",
    description:
      "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
  }
];

function WhistleDifference() {
  const { data: fetched } = useContent(12);
  const content = fetched?.[6] || {};
  const contentItems = fetched?.slice(0, items.length) || [];

  return (
    <section className="difference-section">
      <div className="difference-container">

        {/* LEFT */}

        <div className="difference-card">

          <h2>
            {content.title || "The Whistle Difference"}
          </h2>

          <div className="difference-list">

            {items.map((item, index) => {
              const dyn = contentItems[index];
              const title = dyn?.title || item.title;
              const desc = dyn?.body || item.description;
              return (
                <div className="difference-item" key={index}>

                  <div className="difference-icon">
                    <img src={item.icon} alt={title} />
                  </div>

                  <div className="difference-content">

                    <h3>{title}</h3>

                    <p>{desc}</p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT */}

        <div className="difference-image">

          <img
            src={differenceImage}
            alt="Whistle Difference"
          />

        </div>

      </div>
    </section>
  );
}

export default WhistleDifference;