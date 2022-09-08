import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// her state veya prop değişikliğinde, bileşen yeniden oluşturulur
// memoizing

const pahaliyiHesapla = (data) => {
  console.log("hello");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addCart = useCallback(() => {
    // console.log(cart);
    setCart((c) => c + 1);
  }, [cart]);

  const enPahali = useMemo(() => pahaliyiHesapla(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart: {cart}</h1>
      <h1>En pahalısı : ${enPahali}</h1>
      <BigList products={products} addCart={addCart} />
    </>
  );
};

const BigList = React.memo(({ products, addCart }) => {
  useEffect(() => {
    console.log("büyük liste çağrıldı");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addCart={addCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addCart }) => {
  useEffect(() => {
    console.count("tek ürün çağrıldı");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addCart}>add cart</button>
    </article>
  );
};
export default Index;
