import React, { useRef } from "react";
import "./styles.css";

import Pizza from "../../assets/home.png";
import useObserver from "../../hooks/useObserver";

const Hero = () => {
  const domRef = useRef();

  const isVisible = useObserver({
    ref: domRef,
  });

  return (
    <section className="hero__section" id="hero">
      <div className="hero__title">
        <h1>Italian</h1>
        <h1>Pizzarela</h1>
      </div>
      <div className="image__container">
        <img
          ref={domRef}
          className={`hero__image fade__in ${isVisible ? "appear" : ""}`}
          src={Pizza}
          alt="Italian Pizzarela"
        />
      </div>
    </section>
  );
};

export default Hero;
