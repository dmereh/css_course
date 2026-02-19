import TeacherCard from "./TeacherCard";

function TeacherList({ teachers }) {
  return (
    <div>
      <h2>Teachers</h2>
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          name={teacher.name}
          subject={teacher.subject}
        />
      ))}
    </div>
  );
}

export default TeacherList;
