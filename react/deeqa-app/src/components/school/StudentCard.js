function StudentCard({ name, grade }) {
  return (
    <div style={{ border: "1px solid lightblue", margin: 5, padding: 5 }}>
      <p>{name}</p>
      <small>Grade: {grade}</small>
    </div>
  );
}

export default StudentCard;
