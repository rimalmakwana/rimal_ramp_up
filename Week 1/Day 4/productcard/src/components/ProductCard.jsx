const ProductCard = (props) => {
  const { name, price, imageUrl, inStock, rating } = props;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
        position: "relative",
        opacity: inStock ? 1 : 0.5,
      }}
    >
      {!inStock && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          Out of Stock
        </span>
      )}

      <img src={imageUrl} alt={name} style={{ width: "100%" }} />

      <h3>{name}</h3>
      <p>₹ {price}</p>
      <p>⭐ {rating}</p>

      <button disabled={!inStock}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
