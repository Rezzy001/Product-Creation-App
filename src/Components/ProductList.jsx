const ProductList = ({ productCard, hasCreatedProduct }) => {
  if (productCard.length === 0) {
    return <p className="product-list">No products available.</p>;
  }

  return (
    hasCreatedProduct && (
      <div className="product-grid">
        {productCard.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-img">
              <img src={product.images} />
            </div>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default ProductList;
