import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions/productActions";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
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
      createProduct({
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        stock: Number(formData.stock),
        image: formData.image,
      })
    );

    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Product description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;