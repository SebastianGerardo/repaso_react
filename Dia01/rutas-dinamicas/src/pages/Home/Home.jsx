import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import './Home.css'

function Home() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className="home">
      <div className="cards-box">
        {products && products.length > 0 && products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  );
}

export default Home;
