import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Product } from "../types/product";
import { updateProduct } from "../store/actions/productActions";

interface EditProductFormProps {
  product: Product;
  onCancel: () => void;
}

const EditProductForm = ({
  product,
  onCancel,
}: EditProductFormProps) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: String(product.price),
    category: product.category,
    stock: String(product.stock),
    image: product.image,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      updateProduct(product._id, {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        stock: Number(formData.stock),
        image: formData.image,
      })
    );

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Save Changes</button>

      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;