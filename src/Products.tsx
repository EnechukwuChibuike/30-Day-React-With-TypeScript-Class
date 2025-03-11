import { useState, useEffect } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Products() {
  const API = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log(data);
        });
    };
    fetchData();
  }, []);

  return (
    <section>
      {products.map((product, index) => (
        <figure key={index}>
          <img src={product.image} alt="products image" />
          <figcaption>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
