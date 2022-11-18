import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function UserList() {
    const [info, setInfo] = useState();
    console.log(info);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios('https://jsonplaceholder.typicode.com/users');
            console.log(res.data);
            setInfo(res.data);
        };

        getUsers();
    }, []);

    return (
        <div>
            <input type='text' placeholder='Search users' />
            <input type='text' placeholder='Search users' />

            {info.map((el, index) => {
                console.log(el);
                return <h1 key={index}>{el.city}</h1>;
            })}
        </div>
    );
}

export default UserList;