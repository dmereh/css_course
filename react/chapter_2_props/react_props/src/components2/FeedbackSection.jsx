import React from "react";
import FeedbackForm from "./FeedbackForm";

const FeedbackSection = ({ productId, onFeedbackSubmit }) => {
  return (
    <div style={{ marginTop: "20px", backgroundColor:"purple", padding: "20px" }}>
      <h3>Leave Your Feedback</h3>
      <FeedbackForm productId={productId} onFeedbackSubmit={onFeedbackSubmit} />
    </div>
  );
};

export default FeedbackSection;
