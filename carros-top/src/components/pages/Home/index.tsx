import { ReactComponent as MainImage } from '../../../assets/images/car-header.svg';
import Navbar from '../../../components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="home-catalog">
        <button>Ver catálogo</button>
        <p>Comece agora a navegar</p>
      </div>
    </>
  );
};

export default Home;
