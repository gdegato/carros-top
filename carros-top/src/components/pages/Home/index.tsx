import ButtonIcon from '../../../components/ButtonIcon';
import { ReactComponent as MainImage } from '../../../assets/images/car-header.svg';
import Navbar from '../../../components/Navbar';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-catalog">
          <div>
            <Link to="/products">
              <ButtonIcon />
            </Link>
          </div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
