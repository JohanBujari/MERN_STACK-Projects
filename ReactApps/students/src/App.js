import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const [students,setStudents] = useState([
    {
      id: 1,
      fname: "James",
      lname: "Jones",
      age: 34,
      email: "james@gmail.com"
    },
    {
      id: 2,
      fname: "Anna",
      lname: "Morrison",
      age: 44,
      email: "anna@gmail.com"
    },
    {
      id: 3,
      fname: "Dyson",
      lname: "Doe",
      age: 52,
      email: "dyson@gmail.com"
    },
    {
      id: 4,
      fname: "Silvia",
      lname: "Lenon",
      age: 28,
      email: "silvia@gmail.com"
    }
  ]);
  

  return (
    <div className="App">
      <Form students={students} setStudents={setStudents} />
      {
        students.map((student, index) => {
          return(
          <StudentList key ={index} i={index} studentObj = {student} students = {students} setStudents={setStudents} />
          )
        })
      }
    </div>
  );
}




export default App;
