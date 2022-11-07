import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = fetch("https://kea-alt-del.dk/t7/api/products/");
      const data = await (await res).json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      <BasketContainer products={products} />
    </div>
  );
}

export default App;
