import { useState } from 'react';
import Header from './Header';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import ImageField from './ImageField';
import TextArea from './TextArea';
import Button from './Button';
import Modal from './Modal';

function ProductForm({
  productCard,
  setProductCard,
  isModalOpen,
  setIsModalOpen,
  setHasCreatedProduct,
}) {
  // Store form data in an object instead of having separate state variables and multiple setState calls
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    images: '',
    description: '',
  });

  const [priceError, setPriceError] = useState('');
  const [error, setError] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle changes for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // check if price input is a number
  const numberCheck = (e) => {
    const value = e.target.value;

    if (value === '') {
      setFormData((formData) => ({ ...formData, price: '' }));
      setPriceError('');
      return;
    }

    if (isNaN(value)) {
      setPriceError('Please enter a valid number');
      return;
    }

    setPriceError('');
    setFormData((formData) => ({ ...formData, price: value }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // form validation
    if (!formData.name.trim()) {
      setError('Product name is required');
      return;
    }

    if (!formData.category) {
      setError('Product category is required');
      return;
    }

    if (!formData.price) {
      setError('Product price is required');
      return;
    } else if (Number(formData.price) <= 0) {
      setError('Product price must be greater than zero');
      return;
    }

    if (!formData.images) {
      setError('Please upload an image');
      return;
    }

    if (!formData.description.trim()) {
      setError('Product description is required');
      return;
    }

    setError('');

    // create productCard object
    const newProductCard = {
      id: Date.now(),
      ...formData,
    };

    // add new productCard to productCard array
    setProductCard([newProductCard, ...productCard]);

    // submit form data
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.oluwasetemi.dev/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          category: formData.category,
          price: Number(formData.price),
          images: formData.images,
          description: formData.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      await response.json();

      // Clear form
      setFormData({
        name: '',
        category: '',
        price: '',
        images: '',
        description: '',
      });

      // Open modal
      setIsModalOpen(true);
      setHasCreatedProduct(true);
      setIsSubmitting(false);

      // Hide form
      setIsFormVisible(false);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  // JSX return
  return (
    <div className="page-container">
      <div className="form-container">
        <Header />
        {!isFormVisible && (
          <Button
            className="submit-btn-container"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            Add New Product
          </Button>
        )}

        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="flex-container">
              <div className="flex-group1">
                <TextInput
                  label="Product Name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <SelectInput
                  label="Product Category"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={[
                    { value: '', label: 'Select a category' },
                    { value: 'electronics', label: 'Electronics' },
                    { value: 'clothing', label: 'Clothing' },
                    { value: 'books', label: 'Books' },
                    { value: 'groceries', label: 'Groceries' },
                  ]}
                />
                <TextInput
                  label="Product Price"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={numberCheck}
                  priceError={priceError}
                />
              </div>
              <div className="flex-group2">
                <ImageField
                  label="Upload Image"
                  name="images"
                  id="images"
                  value={formData.images}
                  onChange={handleChange}
                />
                <TextArea
                  label="Product Description"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button className="submit-btn-container" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Product...' : 'Create Product'}
            </Button>
          </form>
        )}
      </div>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ProductForm;