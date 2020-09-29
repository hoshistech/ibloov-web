import React from "react";
import Button from "../button/Button";

import "./Pagination.css";

const Pagination = (props) => {
  return (
    <div className="pagination-container mb-5">
      <Button btndisabled={false} onClick={() => {}} customClassName="pagination-button">01</Button>
      <Button btndisabled={false} onClick={() => {}} customClassName="pagination-button">02</Button>
      <Button btndisabled={false} onClick={() => {}} customClassName="pagination-button">Next</Button>
    </div>
  );
};

export default Pagination;
