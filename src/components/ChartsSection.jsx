import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartsSection = () => {
  const [data, setData] = useState({
    labels: ["Products", "Orders"],
    datasets: [
      {
        data: [9, 9],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  });

  // Function to update pie chart data dynamically
  const updateData = () => {
    setData({
      labels: ["Products", "Orders"],
      datasets: [
        {
          data: [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-8 shadow rounded">
        <h4 className="text-lg font-bold mb-4">Products</h4>
        <Pie data={data} />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={updateData}
        >
          Update Data
        </button>
      </div>
      <div className="bg-white p-8 shadow rounded">
        <h4 className="text-lg font-bold mb-4">Orders</h4>
        <Pie data={data} />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={updateData}
        >
          Update Data
        </button>
      </div>
    </div>
  );
};

export default PieChartsSection;
