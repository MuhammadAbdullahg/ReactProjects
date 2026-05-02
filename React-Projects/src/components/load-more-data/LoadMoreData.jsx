import { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );

      const result = await res.json();

      if (result) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) {
    return <div>loading data please wait</div>;
  }

  return (
    <div className="loadMoreContainer">
      <div className="items">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}

export default LoadMoreData;
