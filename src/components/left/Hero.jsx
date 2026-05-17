import identity from '../../data/identity.json';

/**
 * Hero — Name, title, location, availability, and bio.
 */
export default function Hero() {
  const { name, title, location, bio, available, openTo } = identity;

  return (
    <header className="hero" id="hero">
      <h1 className="hero__name">{name}</h1>
      <p className="hero__title">{title}</p>
      <div className="hero__meta">
        <span className="hero__location">
          <svg className="hero__location-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {location}
        </span>
        <div className="hero__badges">
          {openTo.map((badge) => (
            <span key={badge} className="hero__badge">{badge}</span>
          ))}
        </div>
      </div>
      <div className="hero__availability" aria-label={available ? 'Available for work' : 'Not available'}>
        <span className={`hero__availability-dot ${available ? 'hero__availability-dot--active' : 'hero__availability-dot--inactive'}`} />
        <span className={available ? 'hero__availability-text--active' : 'hero__availability-text--inactive'}>
          {available ? 'Available for work' : 'Not available'}
        </span>
      </div>
      <p className="hero__bio">{bio}</p>
    </header>
  );
}
