import ButtonSearch from 'components/ButtonSearch';
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
              <h4>Audi Supra TT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nisi
              </p>
            </div>
            <div>
              <button>Comprar</button>
              {/* <Link to="/products">
                <ButtonIcon />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="base-card product-card">
              <div className="product-search">
                  <input type="text" placeholder='Digite sua busca'/>
          <ButtonSearch />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
