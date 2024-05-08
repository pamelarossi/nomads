import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityContainer from './components/CityContainer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={CityContainer} />
      </Routes>
    </Router>
  );
}

export default App;