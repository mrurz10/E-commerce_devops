import React from "react";
import { furnitureData } from "../data/furniture";
import ProductSingle from "./ProductSingle";

const FurnitureSingle = () => {
  return <ProductSingle data={furnitureData} />;
};

export default FurnitureSingle;
