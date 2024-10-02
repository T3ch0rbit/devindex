import React from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SolarSystem.css'; // We'll write CSS for animations separately

const SolarSystem = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <div className="solar-system">
      <div className="sun"></div>

      <div className="planet orbit mercury" onClick={() => navigateTo('/mercury')}>
        <div className="planet-inner mercury"></div>
      </div>

      <div className="planet orbit venus" onClick={() => navigateTo('/venus')}>
        <div className="planet-inner venus"></div>
      </div>

      <div className="planet orbit earth" onClick={() => navigateTo('/earth')}>
        <div className="planet-inner earth"></div>
      </div>

      <div className="planet orbit mars" onClick={() => navigateTo('/mars')}>
        <div className="planet-inner mars"></div>
      </div>

      {/* Add more planets as needed */}
    </div>
  );
};

export default SolarSystem;
