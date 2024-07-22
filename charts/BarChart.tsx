"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data: ChartData<"bar"> = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(21, 128, 61 ,0.4)",
        borderWidth: 0,
        barThickness: 10,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,

    scales: {
      y: {
        ticks: { color: "white" },
      },
      x: {
        ticks: { color: "white", font: { size: 14, family: "DM Sans" } },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Monthly Sales",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
