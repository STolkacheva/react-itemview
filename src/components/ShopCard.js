import React from "react";
import PropTypes from "prop-types";

export default function ShopCard({ item }) {
  return (
    <div className="cardview-item">
      <img className="cardview-item-img" src={item.img} alt={item.name} />
      <div className="cardview-item-name">{item.name}</div>
      <div className="cardview-item-color">{item.color}</div>
      <div className="cardview-item-price">${item.price}</div>
      <button type="button" className="cardview-item-button"> add to cart </button>
    </div>
  );
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
};
