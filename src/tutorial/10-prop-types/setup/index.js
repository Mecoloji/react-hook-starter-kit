import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";
import defaultImage from "../../../assets/default-image.jpeg";

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
