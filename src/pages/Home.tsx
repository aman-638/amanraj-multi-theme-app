import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="p-4 border border-gray-300 dark:border-gray-700 rounded shadow bg-white dark:bg-gray-800"
        >
          <h2 className="font-bold mb-2 text-lg text-gray-900 dark:text-white">
            {p.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
            {p.description.slice(0, 100)}...
          </p>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            ${p.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
