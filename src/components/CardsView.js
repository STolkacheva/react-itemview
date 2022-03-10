import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard.js";

export default function CardsView({ items }) {
  return (
    <div className="cardview">
      {items.map((product) => (
        <ShopCard item={product} key={product.name + product.color} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
