import React from "react";
import FeedbackSection from "./FeedbackSection";

const ProductDetails = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "50px", backgroundColor: "red" }}>
      <div>ProductDetails</div>
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <FeedbackSection
        productId={props.product.id}
        onFeedbackSubmit={props.onFeedbackSubmit}
      />
    </div>
  );
};

export default ProductDetails;
