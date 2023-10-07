import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {

    const marksArray = [
        {
            "studentName": "Student 1",
            "math": 85,
            "english": 90,
            "science": 78
        },
        {
            "studentName": "Student 2",
            "math": 92,
            "english": 88,
            "science": 95
        },
        {
            "studentName": "Student 3",
            "math": 78,
            "english": 85,
            "science": 80
        },
        {
            "studentName": "Student 4",
            "math": 90,
            "english": 92,
            "science": 88
        },
        {
            "studentName": "Student 5",
            "math": 88,
            "english": 86,
            "science": 87
        },
        {
            "studentName": "Student 6",
            "math": 82,
            "english": 89,
            "science": 76
        },
        {
            "studentName": "Student 7",
            "math": 94,
            "english": 91,
            "science": 92
        },
        {
            "studentName": "Student 8",
            "math": 87,
            "english": 84,
            "science": 85
        },
        {
            "studentName": "Student 9",
            "math": 91,
            "english": 93,
            "science": 90
        },
        {
            "studentName": "Student 10",
            "math": 89,
            "english": 87,
            "science": 89
        }
    ]

    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray}
            
            >
                <Line stroke="#8884d8" dataKey="math"></Line>
                <Line dataKey="english"></Line>
                <Tooltip></Tooltip>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
            </LineChart>

        </div>
    );
};

export default DashBoard;