import { useState } from "react";

function Attendance({ studentName }) {
  const [present, setPresent] = useState(false);

  return (
    <div>
      <p>{studentName}</p>
      <button onClick={() => setPresent(!present)}>
        {present ? "Present" : "Absent"}
      </button>
    </div>
  );
}

export default Attendance;
