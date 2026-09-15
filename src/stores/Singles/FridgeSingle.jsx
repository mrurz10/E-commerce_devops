import React from "react";
import { fridgeData } from "../data/fridge";
import ProductSingle from "./ProductSingle";

const FridgeSingle = () => {
  return <ProductSingle data={fridgeData} />;
};

export default FridgeSingle;
