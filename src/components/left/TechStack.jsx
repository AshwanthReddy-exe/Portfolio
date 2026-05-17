import { useState } from 'react';
import skills from '../../data/skills.json';

/**
 * TechStack — Filterable category chips.
 * Clicking a category highlights its skills, dims others.
 * Clicking "All" resets to show everything.
 */
export default function TechStack() {
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState('All');

  const allSkills = categories.flatMap((cat) =>
    skills[cat].map((skill) => ({ skill, category: cat }))
  );

  const handleFilter = (category) => {
    setActiveCategory(category === activeCategory ? 'All' : category);
  };

  const getChipClass = (category) => {
    if (activeCategory === 'All') return 'stack-chip';
    if (activeCategory === category) return 'stack-chip stack-chip--highlighted';
    return 'stack-chip stack-chip--dimmed';
  };

  return (
    <section className="stack-section" id="stack">
      <h2 className="stack-section__heading">Stack</h2>
      <div className="stack-filters" role="tablist" aria-label="Filter skills by category">
        <button
          className={`stack-filters__btn ${activeCategory === 'All' ? 'stack-filters__btn--active' : ''}`}
          onClick={() => setActiveCategory('All')}
          role="tab"
          aria-selected={activeCategory === 'All'}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`stack-filters__btn ${activeCategory === cat ? 'stack-filters__btn--active' : ''}`}
            onClick={() => handleFilter(cat)}
            role="tab"
            aria-selected={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="stack-chips" role="list" aria-label="Skills">
        {allSkills.map(({ skill, category }) => (
          <span
            key={`${category}-${skill}`}
            className={getChipClass(category)}
            role="listitem"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
