import React from 'react';
import projectIntro from './image/projectIntro.gif';
import StarWarsProvider from './context/StarWarsProvider';
import TopForm from './components/TopForm';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <header className="App-header">
        <img className="App-header" src={ projectIntro } alt="star wars cover" />
      </header>
      <main className="App">
        <TopForm />
        <PlanetsTable />
      </main>
    </StarWarsProvider>
  );
}

export default App;
