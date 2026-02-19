import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div>
      <h2>Students</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
}

export default StudentList;
