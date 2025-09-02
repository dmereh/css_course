import React from "react";
import ProductDetails from "./ProductDetails";

const ProductPage = (props) => {
  return (
    <div style={{ padding: "50px", backgroundColor: "blue" }}>
      {/* <div>{JSON.stringify(props.product)}</div> */}
<div>ProductPage</div>
      <ProductDetails
        product={props.product}
        onFeedbackSubmit={props.onFeedbackSubmit}
      />
    </div>
  );
};

export default ProductPage;
