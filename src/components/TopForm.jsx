import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function TopForm() {
  const { setSearched, setNumericFilter, numericFilter } = useContext(StarWarsContext);
  const INITIAL_FILTERS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [filterOptions, setFilterOptions] = useState(INITIAL_FILTERS);
  const [apllyedFilters, setApllyedFilters] = useState([]);
  const [numberValue, setNumberValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { target: { filter, comparison } } = event;
    const result = {
      filter: filter.value,
      comparison: comparison.value,
      numberValue,
    };
    const newFilterOptions = filterOptions.filter((item) => item !== filter.value);
    setFilterOptions(newFilterOptions);
    setApllyedFilters([...apllyedFilters, filter.value]);
    setNumericFilter([...numericFilter, result]);
    setNumberValue(0);
  };

  const handleChange = ({ target }) => {
    setSearched(target.value);
  };

  // uso do indexOf retirado da resposta contida no link abaixo:
  // https://stackoverflow.com/questions/14930516/compare-two-javascript-arrays-and-remove-duplicates
  const handleRemoveClick = ({ target: { parentNode: { id } } }) => {
    const getFilter = id;
    const newApllyedFilters = apllyedFilters.filter((item) => item !== getFilter);
    setApllyedFilters(newApllyedFilters);
    const newFilterOptions = INITIAL_FILTERS.filter((item) => (
      newApllyedFilters.indexOf(item)
    ));
    setFilterOptions([...newFilterOptions]);
    const newNumericFilter = numericFilter.filter((item) => item.filter !== getFilter);
    setNumericFilter([...newNumericFilter]);
  };

  const handleResetClick = () => {
    setApllyedFilters([]);
    setFilterOptions(INITIAL_FILTERS);
    setNumericFilter([]);
    setNumberValue(0);
  };

  return (
    <nav>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Qual planeta você deseja encontrar?"
          name="input-planet"
          onChange={ handleChange }
        />
      </form>
      <form onSubmit={ handleSubmit }>
        <select name="filter" data-testid="column-filter">
          { filterOptions.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          )) }
        </select>
        <select name="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="numberValue"
          data-testid="value-filter"
          type="number"
          placeholder="0"
          value={ numberValue }
          onChange={ (event) => setNumberValue(event.target.value) }
        />
        <button data-testid="button-filter" type="submit">
          Filtrar
        </button>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ handleResetClick }
        >
          Remover Filtros
        </button>
      </form>
      { apllyedFilters.length > 0 && apllyedFilters.map((filter, index) => (
        <label data-testid="filter" htmlFor="remove" id={ filter } key={ index }>
          {`${filter} `}
          <button id="remove" type="button" onClick={ handleRemoveClick }>x</button>
        </label>
      )) }
    </nav>
  );
}
