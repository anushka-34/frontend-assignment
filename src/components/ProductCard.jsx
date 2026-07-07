function ProductCard({ image, name }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <button>Customize It</button>
    </div>
  );
}

export default ProductCard;