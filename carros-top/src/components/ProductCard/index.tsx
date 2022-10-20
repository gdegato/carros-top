import ButtonCatalog from 'components/ButtonCatalog';
import ButtonSearch from 'components/ButtonSearch';
import { Link } from 'react-router-dom';
import ProductImg from '../../assets/images/product.png';
import './styles.css';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <div className="product-image-container">
            <img src={ProductImg} alt="Carro" className="image" />
          </div>
          <div className="card-content-container">
            <div>
              <h3 className="card-title">Audi Supra TT</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nisi
              </p>
            </div>
            <div className="container-card-top">
              <div className="card-button">
              <Link to="/products">
                <ButtonCatalog />
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
