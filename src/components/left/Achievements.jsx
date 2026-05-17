import achievements from '../../data/achievements.json';

/**
 * Achievements — Simple list of achievement strings.
 * Hidden when the array is empty.
 */
export default function Achievements() {
  if (!achievements.length) return null;

  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-section__heading">Achievements</h2>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-item">{item}</div>
        ))}
      </div>
    </section>
  );
}
