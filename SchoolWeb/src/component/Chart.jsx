// Chart page
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



function Chart() {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [students]);

  // Object for counting students in each class
  const classCounts = {};
  students.forEach((student) => { // Changed variable name here
    classCounts[student.class] = (classCounts[student.class] || 0) + 1;
  });

  // Data for the chart
  const data = {
    labels: Object.keys(classCounts),
    datasets: [
      {
        label: "Number of Students from a class",
        data: Object.values(classCounts),
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
      },
    ],
  };

  // Render the chart 
        
  return (
    <div className="w-1/2 ml-20 mb-10">
      <h2 className="text-3xl text-center text-gray-500 py-5">Student Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}

export default Chart;

