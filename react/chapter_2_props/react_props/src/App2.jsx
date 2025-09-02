import React, { useState } from "react";
import ProductPage from "./components2/ProductPage";

function App() {
  const product = {
    id: 1,
    name: "Smart Headphones",
    description: "Noise cancelling, Bluetooth enabled headphones.",
  };

  const [feedback, setFeedback] = useState([]);

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedback((prev) => [...prev, newFeedback]);
  };

  return (
    <div style ={{ padding: "20px",backgroundColor:'green'}}>
      {/* <h1>Product Feedback App</h1> */}
<div>
    App
</div>
      <ProductPage product={product} onFeedbackSubmit={handleFeedbackSubmit} />
      <h2>All Feedback:</h2>
      <ul>
        {feedback.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
