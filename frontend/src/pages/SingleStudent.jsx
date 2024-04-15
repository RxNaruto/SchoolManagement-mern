import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleStudent = () => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/student/findstudents1');
                setStudent(response.data.response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStudent();
    }, []);

    return (
        <div>
            <h1>Student Details</h1>
            {student ? (
                <ul>
                    <li>Name: {student.name}</li>
                    <li>Roll No: {student.rollno}</li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleStudent;
