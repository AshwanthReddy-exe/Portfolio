import education from '../../data/education.json';

/**
 * Education — Renders education entries from education.json.
 */
export default function Education() {
  if (!education.length) return null;

  return (
    <section className="education-section" id="education">
      <h2 className="education-section__heading">Education</h2>
      <div className="education-entries">
        {education.map((entry, index) => (
          <div className="education-entry" key={index}>
            <span className="education-entry__degree">{entry.degree}</span>
            <span className="education-entry__university">{entry.university}</span>
            <div className="education-entry__meta">
              {entry.cgpa && <span>{entry.cgpa}</span>}
              <span>{entry.years}</span>
              {entry.location && <span>· {entry.location}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
