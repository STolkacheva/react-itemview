import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem.js";

export default function ListView({ items }) {
  return (
    <div className="listview">
      {items.map((product) => (
        <ShopItem item={product} key={product.name + product.color} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
