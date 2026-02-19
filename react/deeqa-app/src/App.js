// import logo from './logo.svg';
import "./App.css";
import School from "./components/school/School";
import Principal from "./components/school/Principal";
import TeacherList from "./components/school/TeacherList";
import StudentList from "./components/school/StudentList";
import ClassRoom from "./components/school/ClassRoom";
import SubjectList from "./components/school/SubjectList";
import Library from "./components/school/Library";

function App() {
  const teachers = [
    { id: 1, name: "Mr. Smith", subject: "Math" },
    { id: 2, name: "Ms. Johnson", subject: "Science" },
  ];

  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
  ];

  return (
    <School name="Greenwood High School">
      <Principal name="Dr. Brown" experience={15} />
      <TeacherList teachers={teachers} />
      <StudentList students={students} />
      <ClassRoom name="Grade 10A" capacity={30} />
      <SubjectList subjects={["Math", "Science", "History"]} />
      <Library books={[{ id: 1, title: "Physics 101" }]} />
    </School>
  );
}

export default App;
