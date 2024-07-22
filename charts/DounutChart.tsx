"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.2)",
          "rgba(21, 128, 61 ,0.3)",
          "rgba(21, 128, 61 ,0.4)",
          "rgba(21, 128, 61 ,0.5)",
          "rgba(21, 128, 61 ,0.6)",
        ],
        borderColor: [
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.1)",
          "rgba(21, 128, 61 ,0.1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
