import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/teacher/findstudents');
                if (response.data) {
                    setStudents(response.data.response);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>All Students</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {students.map(student => (
                        <li key={student._id}>
                            <strong>Name:</strong> {student.name}, <strong>Roll No:</strong> {student.rollno}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllStudents;
