import React from "react";
import { womanData } from "../data/woman";
import CategoryPreview from "./CategoryPreview";

const Woman = () => {
  return <CategoryPreview title="Woman Dressing" link="/woman" data={womanData} />;
};

export default Woman;
