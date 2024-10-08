import './Earth.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import TodoList from './ToDoList';

const Earth = () => {
  return (
    <>
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 0 }}>
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
      </div>
    </>
  );
};

export default Earth;
