function TeacherCard({ name, subject }) {
  return (
    <div style={{ border: "1px solid gray", margin: 5, padding: 5 }}>
      <p>{name}</p>
      <small>Teaches: {subject}</small>
    </div>
  );
}

export default TeacherCard;
