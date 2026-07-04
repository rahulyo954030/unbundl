import "../styles/StepsSection.css";
import { Play } from "lucide-react";
import stepVideo from "../assets/steps-video.png";

const steps = [
  {
    number: "1",
    title: "Scan",
    description:
      "We use an AI-powered scanner to take a detailed 3D image of your teeth.",
  },
  {
    number: "2",
    title: "Plan",
    description:
      "Our Orthodontists design your customized smile enhancement plan using highly advanced software.",
  },
  {
    number: "3",
    title: "Fabricate",
    description:
      "We manufacture your aligners leveraging 3D printing & laser technology.",
  },
  {
    number: "4",
    title: "Wear",
    description:
      "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.",
  },
];

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-container">

        {/* LEFT */}

        <div className="steps-left">

          <h2>
            Get your perfect smile in four simple steps
          </h2>

          <div className="steps-grid">

            {steps.map((step) => (
              <div className="step-item" key={step.number}>

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="steps-video">

          <img
            src={stepVideo}
            alt="Smile Journey"
          />

          <button className="play-button">

            <Play
              fill="white"
              size={32}
              strokeWidth={2}
            />

          </button>

        </div>

      </div>
    </section>
  );
}

export default StepsSection;