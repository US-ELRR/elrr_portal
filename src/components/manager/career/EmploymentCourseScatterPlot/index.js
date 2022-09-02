import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useMemo, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EmploymentCourseScatterPlot({ userId }) {
  // fetch the data from the the db
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const options = {
    indexAxis: 'x', // x or y
    elements: {},
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
        labels: {},
      },
      title: {
        display: true,
        text: 'Distribution of Personnel by Role',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Employment Role',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Personnel Count',
        },
        min: 0,

        ticks: {
          // forces step size to be 50 units
          stepSize: 1,
        },
      },
    },
  };

  const chartData = useMemo(() => {
    // null check for the data
    if (!data?.history) return;

    // get the avg of the data

    console.log(data);
    // build the chart data
    return {
      labels: data.history.map((item) => item.employment),
      datasets: [
        {
          label: 'Active',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'COMPLETED')
                .length
          ),
          backgroundColor: '#00b89450',
          borderColor: '#00b894',
          borderWidth: 2,
        },
        {
          label: 'Unassigned',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'REGISTERED')
                .length
          ),

          // purple hex
          backgroundColor: '#ffb60050',
          borderColor: '#ffb600',
          borderWidth: 2,
        },
        {
          label: 'Inactive',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'ABANDONED')
                .length
          ),
          backgroundColor: '#ff4d4d50',
          borderColor: '#ff4d4d',
          borderWidth: 2,
        },
      ],
    };
  }, [data]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/historical/employment-course-distribution/${userId}`)
        .then((res) => {
          setData(res.data);
          setError(null);
        })
        .catch((err) => {
          setData([]);
          setError(err);
        });
    }
  }, [userId]);

  return chartData ? (
    <Bar data={chartData} options={options} />
  ) : (
    <div className='text-center mt-10 h-[17.18rem] rounded shadow text-gray-900 font-semibold font-mono flex justify-center items-center bg-white '>
      {error && 'Error retrieving data'}
    </div>
  );
}