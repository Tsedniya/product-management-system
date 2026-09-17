import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <div>
      <h1>Product Management System</h1>

      <AddProductForm />
      <ProductList />
     
    </div>
  );
}

export default App;