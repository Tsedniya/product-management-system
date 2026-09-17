import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../types/product";
import {
  fetchProducts,
  deleteProduct,
} from "../store/actions/productActions";
import EditProductForm from "./EditProductForm";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );

  const loading = useSelector(
    (state: { loading: boolean }) => state.loading
  );

  const error = useSelector(
    (state: { error: string | null }) => state.error
  );

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading && products.length === 0) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Products</h2>

      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      {products.map((product) => (
        <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>

            <button onClick={() => setEditingProduct(product)}>
            Edit
            </button>

            <button onClick={() => dispatch(deleteProduct(product._id))}>
            Delete
            </button>
        </div>
        ))}
    </div>
  );
};

export default ProductList;