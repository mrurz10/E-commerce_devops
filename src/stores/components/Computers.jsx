import React from "react";

import { computerData } from "../data/computers";
import CategoryPreview from "./CategoryPreview";

const Computers = () => {
  return <CategoryPreview title="Computers" link="/computers" data={computerData} />;
};

export default Computers;
