import "../styles/ResultsSection.css";

import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";

import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";

import before3 from "../assets/before3.png";
import after3 from "../assets/after3.png";

import before4 from "../assets/before4.png";
import after4 from "../assets/after4.png";

const results = [
  {
    before: before1,
    after: after1,
    concern: "Gaps",
    duration: "8 months",
  },
  {
    before: before2,
    after: after2,
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    before: before3,
    after: after3,
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    before: before4,
    after: after4,
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];

function ResultsSection() {
  return (
    <section className="results-section">
      <div className="results-container">

        <h2 className="results-title">
          Results You’ll Love
        </h2>

        <div className="results-grid">

          {results.map((item, index) => (
            <div className="result-card" key={index}>

              <div className="images">

                <div className="image-item">
                  <img src={item.before} alt="Before" />
                  <p>Before</p>
                </div>

                <div className="image-item">
                  <img src={item.after} alt="After" />
                  <p>After</p>
                </div>

              </div>

              <div className="details">

                <div className="detail-row">
                  <span>Concern</span>
                  <strong>{item.concern}</strong>
                </div>

                <div className="detail-row">
                  <span>Treatment Duration</span>
                  <strong>{item.duration}</strong>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ResultsSection;