import React from 'react';

const StudentList = (props) => {
    const {i, studentObj, students, setStudents} = props;

    function changeAge() {
        const newAge = Math.floor(Math.random()*100);
        const newStudentArray = students.map((student) => {
            if(student.id === studentObj.id){
                const newStudent = {...student, age:newAge};
                return newStudent;
            }
            return student;
        })

        setStudents(newStudentArray);
    }
    function deleteStudent(){
        const deletedStudent = students.filter(student => student.id !==studentObj.id);
        setStudents(deletedStudent);
    }

    return (
        <div>
             <h1>Student {i+1} </h1>
            <h1>First Name: {studentObj.fname}</h1>
            <h1>Last Name: {studentObj.lname}</h1>
            <h3>Age: {studentObj.age}</h3>
            <h3>Email: {studentObj.email}</h3>
            <button className='btn btn-primary btn-sm' onClick={changeAge}>CHANGE AGE</button>
            <button className='btn btn-danger btn-sm' onClick={deleteStudent}>DELETE STUDENT</button>
        </div>
    );
};


export default StudentList;