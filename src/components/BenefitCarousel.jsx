import "../styles/BenefitCarousel.css";
import useContent from "./common/useContent";

function BenefitCarousel() {
  const { data } = useContent(6);
  const items = data && data.length ? data.slice(0, 4) : null;

  const renderItem = (item, index) => (
    <div className="benefit-item" key={index}>
      {item.title && <span>{item.title}</span>}
      <strong>{item.body ? item.body.split(' ')[0] : 'Free benefit'}</strong>
      <span>{item.body ? item.body.split(' ').slice(1,4).join(' ') : 'worth ₹500'}</span>
    </div>
  );

  const fallback = [
    { title: 'Our inaugural launch benefit', body: 'Free teeth scan worth ₹500' },
    { title: '', body: 'Free orthodontic consultation worth ₹1500' },
    { title: 'Our inaugural launch benefit', body: 'Free teeth scan worth ₹500' },
    { title: '', body: 'Free orthodontic consultation worth ₹1500' },
  ];

  const source = items || fallback;

  return (
    <section className="benefit-bar">
      <div className="container-2xl">
        <div className="marquee">

        {/* First Set */}
        <div className="marquee-content">
          {source.map((it, index) => renderItem(it, index))}
        </div>

        {/* Duplicate Set for Infinite Loop */}
        <div className="marquee-content">
          {source.map((it, index) => (
            <div className="benefit-item" key={`copy-${index}`}>
              {it.title && <span>{it.title}</span>}
              <strong>{it.body ? it.body.split(' ')[0] : 'Free benefit'}</strong>
              <span>{it.body ? it.body.split(' ').slice(1,4).join(' ') : 'worth ₹500'}</span>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}

export default BenefitCarousel;