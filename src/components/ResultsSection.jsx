import "../styles/ResultsSection.css";
import useContent from "./common/useContent";

import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";

import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";

import before3 from "../assets/before3.png";
import after3 from "../assets/after3.png";

import before4 from "../assets/before4.png";
import after4 from "../assets/after4.png";

const defaultResults = [
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
  const { data: fetched } = useContent(10);
  const content = fetched?.[4] || {};
  const apiResults = fetched?.slice(0, 4) || [];
  const results = defaultResults.map((r, i) => {
    const post = apiResults[i];
    if (!post) return r;
    return {
      before: r.before,
      after: r.after,
      concern: post.title || r.concern,
      duration: post.body ? post.body.split(" ").slice(0,2).join(" ") : r.duration,
    };
  });
  return (
    <section className="results-section">
      <div className="results-container">

        <h2 className="results-title">
          {content.title || "Results You’ll Love"}
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