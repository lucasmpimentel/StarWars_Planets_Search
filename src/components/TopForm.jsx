import React from 'react';

export default function TopForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Qual planeta você deseja encontrar?"
        name="input-planet"
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
}
