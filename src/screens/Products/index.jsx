import React, { useRef } from "react";
import "./styles.css";

import ProductCard from "../../components/ProductCard";
import ProductSizesCard from "../../components/ProductSizesCard";

import { pizzas, sizes, brands, options } from "./constants";
import useObserver from "../../hooks/useObserver";

const Products = () => {
  const refPizzas = useRef();
  const refSizes = useRef();
  const refDrinks = useRef();

  const isVisible = useObserver({
    ref: refPizzas,
    options,
  });

  const isVisibleSizes = useObserver({
    ref: refSizes,
    options,
  });

  const isVisibleDrinks = useObserver({
    ref: refDrinks,
    options,
  });

  return (
    <section className="products__section" id="products">
      <h2>Pizzas</h2>
      <ul
        ref={refPizzas}
        className={`products__list fade__in ${isVisible ? "appear" : ""}`}
      >
        {pizzas &&
          pizzas.map((item, index) => (
            <ProductCard
              index={index}
              key={item.name}
              name={item.name}
              image={item.image}
              prices={item.prices}
            />
          ))}
      </ul>
      <h2>Tamanhos</h2>
      <div
        ref={refSizes}
        className={`products__list fade__in ${isVisibleSizes ? "appear" : ""}`}
      >
        {sizes &&
          sizes.map(item => (
            <ProductSizesCard
              key={item.label}
              name={item.name}
              size={item.size}
              label={item.label}
            />
          ))}
      </div>
      <h2>Bebidas</h2>
      <div
        ref={refDrinks}
        className={`products__slider fade__in ${
          isVisibleDrinks ? "appear" : ""
        }`}
      >
        <div className="products__slider__inner">
          {["brand_logo1", "brand_logo2"].map(item => (
            <span key={item}>
              {brands.map(brand_logo => (
                <img
                  key={brand_logo}
                  className="logo"
                  src={brand_logo}
                  alt={brand_logo}
                />
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
