import React from "react";
import { computerData } from "../data/computers";
import ProductSingle from "./ProductSingle";

const ComputerSingle = () => {
  return <ProductSingle data={computerData} />;
};

export default ComputerSingle;
