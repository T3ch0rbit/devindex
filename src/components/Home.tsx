// src/components/Home.tsx
import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import TodoList from './ToDoList';
import ParticlesBackground from './ParticlesBackground'; // Import the particles component

const Home = () => {
  return (
    <>
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Dev Index</h1>
        <TodoList />
        <div className="card">
          <p>
            Edit <code>src/components/Home.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
};

export default Home;
