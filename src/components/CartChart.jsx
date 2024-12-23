// src/components/CartChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CartChart = ({ cart }) => {
  // Prepare chart data
  const chartData = {
    labels: cart.map(item => item.name), // Product names as labels
    datasets: [
      {
        label: 'Product Quantities',
        data: cart.map(item => item.quantity), // Product quantities for each item in the cart
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color of the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Border color of the bars
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Products',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantity',
        },
        min: 0,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart Product Quantities</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default CartChart;
