import React from "react";
import { acData } from "../data/ac";
import CategoryPreview from "./CategoryPreview";

const AC = () => {
  return <CategoryPreview title="Air Condition" link="/ac" data={acData} />;
};

export default AC;
