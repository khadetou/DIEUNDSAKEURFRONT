import React from "react";
import Card1 from "./card/card1";
import Pagination from "./pagination";

const Bottom = () => {
  return (
    <div className="col-xl-12">
      <div className="property-2 row column-sm property-label property-grid">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <Pagination />
    </div>
  );
};

export default Bottom;
