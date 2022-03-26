import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetchPlanets();
      setPlanets(data.results);
    };
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planets } }>
      { children }
    </StarWarsContext.Provider>
  );
}

// Ref: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
