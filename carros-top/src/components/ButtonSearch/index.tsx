import './styles.css';

const ButtonSearch = () => {
  return (
    <>
      <div className="btn-container">
        <div>
          <input
            type="text"
            placeholder="Digite sua busca"
            className="input-search"
          />
        </div>
        <div>
          <button className="btn btn-primary btn-search">Buscar</button>{' '}
        </div>
      </div>
    </>
  );
};

export default ButtonSearch;
