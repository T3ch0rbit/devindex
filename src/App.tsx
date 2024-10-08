import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Earth from './components/Earth';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for Solar System Overview */}
          <Route path="/" element={<Home />} />
          <Route path="/earth" element={<Earth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;