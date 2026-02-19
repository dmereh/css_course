

function School({ name, children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      <h1>{name}</h1>
      {children}
    </div>
  );
}

export default School;
