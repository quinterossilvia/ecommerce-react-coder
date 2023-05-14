const ItemCount = ({ max, cantidad, modify }) => {
  const suma = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    }
  };

  const resta = () => {
    if (cantidad > 0) modify(cantidad - 1);
  };

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-secondary m-2" onClick={resta}>
        –
      </button>
      <h2> {cantidad} </h2>
      <button className="btn btn-secondary m-2" onClick={suma}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
