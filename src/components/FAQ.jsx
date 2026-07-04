import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "What are Aligners?",
    answer:
      "Clear aligners are transparent trays that gradually move your teeth into their desired position without using metal braces.",
  },
  {
    question: "How do Aligners work?",
    answer:
      "Each set of aligners gently applies controlled pressure to move your teeth. You wear each aligner for the recommended duration before switching to the next set.",
  },
  {
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "Complex teeth alignment should be planned and monitored by an Orthodontist for safe and predictable treatment results.",
  },
  {
    question: "Are there any restriction on eating or drinking?",
    answer:
      "No. Remove your aligners before eating or drinking anything except water, then brush and wear them again.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Treatment duration depends on your case. Most treatments are completed within 6–18 months after evaluation.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-container">

        <h2>
          <span>Got Questions?</span> We've got answers
        </h2>

        <div className="faq-list">

          {faqs.map((item, index) => (

            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >

                <span>{item.question}</span>

                {active === index ? (
                  <Minus size={26} />
                ) : (
                  <Plus size={26} />
                )}

              </button>

              <div
                className={`faq-answer ${
                  active === index ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;