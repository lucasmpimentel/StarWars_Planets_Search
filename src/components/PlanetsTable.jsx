import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './PlanetsTable.css';

export default function PlanetsTable() {
  const { planets, searchedPlanet } = useContext(StarWarsContext);
  const [filteredPlanets, setFiltered] = useState([]);

  useEffect(() => {
    const result = planets.filter((planet) => (
      planet.name.toLowerCase().includes(searchedPlanet)
    ));
    setFiltered(result);
  }, [searchedPlanet, planets]);

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
          { filteredPlanets.length > 0 ? (
            filteredPlanets.map((filtered, index) => (
              <tr key={ index }>
                <td>{filtered.name}</td>
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
            ))) : (
            planets.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          ) }
        </tbody>
      </table>
    </section>
  );
}
