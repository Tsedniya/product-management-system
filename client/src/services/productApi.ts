import type { Product } from "../types/product";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const createProduct = async (product: Omit<Product, "_id">): Promise<Product> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if(!response.ok){
        throw new Error("Failed to create product");
    }

    return response.json();

}

export const updateProduct = async (
  id: string,
  product: Omit<Product, "_id">
): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
};