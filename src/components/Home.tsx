import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Home.css'; // We'll write CSS for animations separately
import mercuryImg from '../assets/Mercury.jpg';
import jupiterImg from '../assets/Jupiter.jpg';
import earthImg from '../assets/earth.jpg';
import venusImg from '../assets/venus.jpg';
import marsImg from '../assets/mars.jpg';
import saturnImg from '../assets/saturn.jpg';
import uranusImg from '../assets/uranus.jpg';
import neptuneImg from '../assets/neptune.jpg';

const Home = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="solar-system">
      <div className="sun"></div>

      <div className="planet orbit earth" onClick={() => navigateTo('/earth')}>
        <img src={earthImg} alt="Earth" className="planet-image" />
      </div>

      <div className="planet orbit mars" onClick={() => navigateTo('/mars')}>
        <img src={marsImg} alt="Mars" className="planet-image" />
      </div>

      <div className="planet orbit mercury">
        <img src={mercuryImg} alt="Mercury" className="planet-image" />
      </div>

      <div className="planet orbit jupiter">
        <img src={jupiterImg} alt="Jupiter" className="planet-image" />
      </div>

      <div className="planet orbit venus">
        <img src={venusImg} alt="Venus" className="planet-image" />
      </div>

      <div className="planet orbit saturn">
        <img src={saturnImg} alt="Saturn" className="planet-image" />
      </div>

      <div className="planet orbit uranus">
        <img src={uranusImg} alt="Uranus" className="planet-image" />
      </div>

      <div className="planet orbit neptune">
        <img src={neptuneImg} alt="Neptune" className="planet-image" />
      </div>
    </div>
  );
};

export default Home;
