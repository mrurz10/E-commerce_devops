import React from "react";
import { kitchenData } from "../data/kitchen";
import ProductSingle from "./ProductSingle";

const KitchenSingle = () => {
  return <ProductSingle data={kitchenData} />;
};

export default KitchenSingle;
