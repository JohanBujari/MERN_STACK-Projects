import React from 'react';
import { useState } from 'react';
import {nanoid} from 'nanoid';

const Form = (props) => {
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState('');

    const {students, setStudents} = props;

    function submitHandler(e) {
        e.preventDefault();

        const newStudent = {
            id: nanoid,
            fname,
            lname,
            age,
            email
        }
        setStudents([...students, newStudent]);
        console.log(students);
    }

    return (
        <div>
             <div>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <input type='text' onChange={(e)=>setFname(e.target.value)}/><br/>
                <label>Last Name:</label>
                <input type='text' onChange={(e)=>setLname(e.target.value)}/><br/>
                <label>Age:</label>
                <input type='number' onChange={(e)=>setAge(e.target.value)}/><br/>
                <label>Email:</label>
                <input type='text' onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type='submit' value='SUBMIT'/>
            </form>
        </div>
        </div>
    );
};


export default Form;