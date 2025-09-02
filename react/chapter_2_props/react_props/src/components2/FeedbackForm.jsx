import React, { useState } from "react";

const FeedbackForm = ({ productId, onFeedbackSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onFeedbackSubmit(`Product ${productId}: ${comment}`);
      setComment("");
    }
  };

  return (
    <form style = {{padding: "20px", backgroundColor: "brown"}} onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        cols={40}
      />
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
