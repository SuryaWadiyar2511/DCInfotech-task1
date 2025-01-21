import React from 'react';
import {Bar} from 'react-chart.js-2';

const Dashboard = () => {
    const data = {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets:[
            {
                label: 'Feedback Count',
                data: [12, 19, 7],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };
        return (
            <div>
                <h2>Feedback Trends</h2>
                <Bar data={data}/>
            </div>
        );
    };
    
    export default Dashboard;