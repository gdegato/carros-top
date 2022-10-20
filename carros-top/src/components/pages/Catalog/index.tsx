import ButtonSearch from 'components/ButtonSearch';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <div className="my-4 container catalog-container">
        <div className="base-card product-card">
          <div>
            <ButtonSearch />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
