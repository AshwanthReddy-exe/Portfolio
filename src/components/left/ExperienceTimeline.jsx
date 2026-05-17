import experience from '../../data/experience.json';

/**
 * ExperienceTimeline — Vertical timeline layout.
 * Each entry from experience.json becomes a timeline node.
 */
export default function ExperienceTimeline() {
  if (!experience.length) return null;

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-section__heading">Experience</h2>
      <div className="timeline">
        {experience.map((entry, index) => (
          <div className="timeline-entry" key={`${entry.company}-${index}`}>
            <div className="timeline-entry__header">
              <span className="timeline-entry__company">{entry.company}</span>
              {entry.location && (
                <span className="timeline-entry__location">· {entry.location}</span>
              )}
            </div>
            <span className="timeline-entry__role">{entry.role}</span>
            <span className="timeline-entry__duration">{entry.duration}</span>
            {entry.bullets && entry.bullets.length > 0 && (
              <ul className="timeline-entry__bullets">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="timeline-entry__bullet">{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
