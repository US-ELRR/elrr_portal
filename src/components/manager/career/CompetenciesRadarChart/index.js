import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useMemo, useState } from 'react';

import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';
import unstable_batchedUpdates from 'react-dom';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CompetenciesRadarChart({ userId }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const chartData = useMemo(() => {
    if (!data?.buckets) return;
    return {
      labels: data?.buckets?.map((bucket) => bucket?.name),
      datasets: [
        {
          label: 'Competencies',
          data: data?.buckets?.map((bucket) => bucket?.courses?.length),
          backgroundColor: [
            'rgba(255, 99, 132, 0.35)',
            'rgba(75, 192, 192,0.35)',
            'rgba(255, 205, 86,0.35)',
            'rgba(201, 203, 207,0.35)',
            'rgba(54, 162, 235,0.35)',
          ],
        },
      ],
    };
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Number of Courses by Competency',
      },
    },
    scales: {
      min: 0,
      suggestedMax: 10,
      r: {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
  };
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`/api/historical/competencies-course-distribution/${userId}`)
      .then((res) => {
        unstable_batchedUpdates(() => {
          setData(res.data);
          setError(null);
        });
      })
      .catch((err) => {
        unstable_batchedUpdates(() => {
          setError(err);
          setData([]);
        });
      });
  }, [userId]);

  return chartData ? (
    <PolarArea data={chartData} options={options} />
  ) : (
    <div className='text-center mt-10 h-[17.18rem] rounded shadow text-gray-900 font-semibold font-mono flex justify-center items-center bg-white '>
      {error && 'Error retrieving data'}
    </div>
  );
}