import { useState } from "react";
import "../styles/ComparisonTable.css";
import { Check, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const data = [
  {
    feature: "Easy to complex cases",
    whistle: "Yes, mild to complex",
    other: "No, only mild to moderate",
    description:
      "Whistle aligners are designed to treat everything from simple spacing to complex bite corrections with expert orthodontic planning.",
  },
  {
    feature: "Clear-cut Pricing",
    whistle: true,
    other: false,
    description:
      "No hidden costs. Every scan, aligner, refinement, consultation and retainer is included.",
  },
  {
    feature: "Aligner Change",
    whistle: "Every 10 days",
    other: "Every 2 weeks",
    description:
      "More frequent aligner changes help reduce overall treatment time while ensuring comfortable tooth movement.",
  },
  {
    feature: "Clinical Partnership",
    whistle: true,
    other: false,
    description:
      "Treatment is planned and monitored by experienced orthodontists through Clove Dental clinics.",
  },
  {
    feature: "Movement Between Cities",
    whistle: true,
    other: false,
    description:
      "Continue your treatment from another city without restarting your treatment plan.",
  },
  {
    feature: "Complimentary Teeth Scaling",
    whistle: true,
    other: false,
    description:
      "Professional teeth scaling is included before your aligner journey begins.",
  },
];

function ComparisonTable() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="comparison-section">
      <div className="comparison-container">

        <h2>What sets Whistle apart?</h2>

        <div className="comparison-table">

          {/* Header */}

          <div className="table-header">

            <div className="feature-header">
              Features
            </div>

            <div className="whistle-header">
              <img src={logo} alt="Whistle" />
            </div>

            <div className="other-header">
              Other Brands
            </div>

          </div>

          {/* Rows */}

          {data.map((item, index) => (

            <div
              className={`accordion-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >

              <div
                className="table-row"
                onClick={() => toggleAccordion(index)}
              >

                <div className="feature-column">

                  <span>{item.feature}</span>

                  <ChevronDown
                    size={18}
                    className={openIndex === index ? "rotate" : ""}
                  />

                </div>

                <div className="whistle-column">

                  {typeof item.whistle === "boolean" ? (
                    item.whistle ? (
                      <div className="icon success">
                        <Check size={15} />
                      </div>
                    ) : (
                      <div className="icon danger">
                        <X size={15} />
                      </div>
                    )
                  ) : (
                    <p>{item.whistle}</p>
                  )}

                </div>

                <div className="other-column">

                  {typeof item.other === "boolean" ? (
                    item.other ? (
                      <div className="icon success">
                        <Check size={15} />
                      </div>
                    ) : (
                      <div className="icon danger">
                        <X size={15} />
                      </div>
                    )
                  ) : (
                    <p>{item.other}</p>
                  )}

                </div>

              </div>

              <div
                className={`accordion-content ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <p>{item.description}</p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ComparisonTable;