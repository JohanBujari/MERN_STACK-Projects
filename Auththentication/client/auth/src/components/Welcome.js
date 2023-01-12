
import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Welcome = () => {
    const [userData, setUserData] =  useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/user", {
            withCredentials:true
        }
        )
        .then(res => {setUserData(res)
        console.log(res)})
        .catch(err => console.log(err))
    }, [userData])

    return (
        <div>
            Welcome  
        </div>
    );
};


export default Welcome;