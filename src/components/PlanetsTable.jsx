import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './PlanetsTable.css';

export default function PlanetsTable() {
  const { planets, searchedPlanet, numericFilter } = useContext(StarWarsContext);
  // local
  const [filteredPlanets, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(planets);
    const result = planets
      .filter((planet) => (
        planet.name.toLowerCase().includes(searchedPlanet.toLowerCase())
      ))
      .filter((planet) => {
        if (numericFilter.length > 0) {
          return numericFilter.every((item) => {
            const { comparison, filter, numberValue } = item;
            if (comparison === 'maior que') {
              return (Number(planet[filter]) > Number(numberValue));
            }
            if (comparison === 'menor que') {
              return (Number(planet[filter]) < Number(numberValue));
            }
            return (Number(planet[filter]) === Number(numberValue));
            /* switch (comparison) {
            case 'maior que':
              return (Number(planet[filter]) > Number(numberValue));
            case 'menor que':
              return (Number(planet[filter]) < Number(numberValue));
            case 'igual a':
              return (Number(planet[filter]) === Number(numberValue));
            default:
              return false;
            } */
          });
        }
        return true;
      });
    setFiltered(result);
  }, [searchedPlanet, planets, numericFilter]);

  return (
    <section className="planets-table">
      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          { filteredPlanets.map((filtered, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{filtered.name}</td>
              <td>{filtered.rotation_period}</td>
              <td>{filtered.orbital_period}</td>
              <td>{filtered.diameter}</td>
              <td>{filtered.climate}</td>
              <td>{filtered.gravity}</td>
              <td>{filtered.terrain}</td>
              <td>{filtered.surface_water}</td>
              <td>{filtered.population}</td>
              <td>{filtered.films}</td>
              <td>{filtered.created}</td>
              <td>{filtered.edited}</td>
              <td>{filtered.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </section>
  );
}
