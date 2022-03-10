import React from "react";
import PropTypes from "prop-types";

export default function ShopItem({ item }) {
  return (
    <div className="listview-item">
      <img className="listview-item-img" src={item.img} alt={item.name} />
      <div className="listview-item-name">{item.name}</div>
      <div className="listview-item-color">{item.color}</div>
      <div className="listview-item-price">${item.price}</div>
      <button type="button" className="listview-item-button"> add to cart </button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};
