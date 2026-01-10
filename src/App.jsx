import { useState } from 'react';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';

function App() {
  const [productCard, setProductCard] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCreatedProduct, setHasCreatedProduct] = useState(false);

  return (
    <div className="section">
      <ProductForm
        productCard={productCard}
        setProductCard={setProductCard}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setHasCreatedProduct={setHasCreatedProduct}
      />
      <ProductList productCard={productCard} hasCreatedProduct={hasCreatedProduct} />
    </div>
  );
}

export default App;
