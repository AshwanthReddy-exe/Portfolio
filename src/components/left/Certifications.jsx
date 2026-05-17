import certifications from '../../data/certifications.json';

/**
 * Certifications — Renders from certifications.json.
 * Hidden entirely when the array is empty.
 * 
 * To add a certification, add an object to certifications.json:
 * {
 *   "title": "AWS Certified Solutions Architect",
 *   "issuer": "Amazon Web Services",
 *   "date": "Jan 2025",
 *   "link": "https://verify-link.com" or null
 * }
 */
export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-section__heading">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="certification-item" key={index}>
            <div className="certification-item__info">
              {cert.link ? (
                <a
                  className="certification-item__title"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.title}
                </a>
              ) : (
                <span className="certification-item__title">{cert.title}</span>
              )}
              <span className="certification-item__issuer">{cert.issuer}</span>
            </div>
            <span className="certification-item__date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
