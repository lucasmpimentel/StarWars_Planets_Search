import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function TopForm() {
  const { setSearched } = useContext(StarWarsContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ target }) => {
    setSearched(target.value);
  };

  return (
    <nav>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Qual planeta você deseja encontrar?"
          name="input-planet"
          onChange={ handleChange }
        />
      </form>
      <form>
        <select>
          <option>option test</option>
        </select>
      </form>
    </nav>
  );
}
