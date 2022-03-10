import React from "react";
import IconSwitch from "./IconSwitch.js";
import CardsView from "./CardsView.js";
import ListView from "./ListView.js";
import products from "../products.js";
import { useState } from "react";

export default function Store() {
  const [view, setView] = useState("view_list");
  const onSwitch = (view) => {
    setView(() => (view === "view_list" ? "view_module" : "view_list"));
  };

  return (
    <div className="store">
      <IconSwitch icon={view} onSwitch={onSwitch} />
      {view === "view_list" ? (
        <CardsView items={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}
