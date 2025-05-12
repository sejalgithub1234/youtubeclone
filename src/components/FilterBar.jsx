import React from 'react';

const FilterBar = () => {
  const filters = ['All', 'React', 'Node.js', 'MongoDB'];

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      {filters.map((filter) => (
        <button key={filter}>{filter}</button>
      ))}
    </div>
  );
};

export default FilterBar;
