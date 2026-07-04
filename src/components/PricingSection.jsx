import "../styles/PricingSection.css";
import alignerImage from "../assets/aligner-box.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import useContent from "./common/useContent";

function PricingSection() {
  const { data } = useContent(8);
  const content = data[3] || {};

  return (
    <section className="pricing-section">
      <div className="pricing-container">

        {/* Left */}
        <div className="pricing-left">
          <h2>
            {content.title || (
              <>Dream smiles<br />achieved secretly</>
            )}
          </h2>

          <p>{content.body || (
            <>Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove.</>
          )}</p>

          <p>{/* keep second paragraph static fallback */}
            The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists.
          </p>
        </div>

        {/* Right Card */}

        <div className="pricing-card">

          {/* LEFT SIDE */}

          <div className="card-left">

            <h3>Whistle Aligners</h3>

            <span className="old-price">
              ₹84,000
            </span>

            <div className="price-row">

              <span className="starting-price">
                starting at
              </span>

              <span className="new-price">
                ₹47,999
              </span>

            </div>

            <span className="tax-text">
              inc. of all taxes
            </span>

            <div className="feature-list">

              <div className="feature-item">
                <CheckCircle2 size={18} />
                <span>Offer valid for a limited time</span>
              </div>

              <div className="feature-item">
                <CheckCircle2 size={18} />
                <span>Easy financing options</span>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="card-right">

            <img
              src={alignerImage}
              alt="Whistle Aligners"
              className="aligner-image"
            />

          </div>

          {/* FOOTER */}

          <div className="card-footer">

            <button className="learn-more-btn">

              Learn more

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PricingSection;