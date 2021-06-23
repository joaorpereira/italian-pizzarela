import React from "react";

const ProductCard = ({ name, prices, image, index }) => {
  return (
    <li className={`product__card`}>
      <img key={name} src={image} alt="Italian Pizzarela" />
      <div className="card__content">
        <h3>{name}</h3>
        <div className="card__prices">
          <div className="row">
            <h4>Pequena:</h4> <p>R${prices?.small}</p>
          </div>
          <div className="row">
            <h4>Média: </h4> <p>R${prices?.medium}</p>
          </div>
          <div className="row">
            <h4>Grande: </h4> <p>R${prices?.big}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
