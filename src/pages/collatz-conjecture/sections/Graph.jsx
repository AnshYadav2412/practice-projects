import React, { useState, useEffect } from "react";
import collatzSequence from "../utils/calculator";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const Graph = () => {
  const [numInput, setNumInput] = useState(27);
  const [collatzArray, setCollatzArray] = useState(collatzSequence(27));

  useEffect(() => {
    if (numInput > 0) {
      setCollatzArray(collatzSequence(numInput));
    }
  }, [numInput]);

  const data = {
    labels: collatzArray.map((_, index) => index),
    datasets: [
      {
        label: "Collatz Sequence",
        data: collatzArray,
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        tension: 0.25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Step",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: false,
      },
    },
  };
  return (
    <div className="h-dvh flex items-center justify-center flex-col gap-2">
      <input
        type="number"
        value={numInput}
        onChange={(e) => {
          setNumInput(Number(e.target.value));
        }}
        className="text-3xl border-2 rounded-2xl text-center"
      />
      <div className="steps">Steps = {collatzArray.length - 1}</div>
      <div className="w-[800px] h-[400px] border p-2">
        <Line data={data} options={options} />
      </div>
      {/* {collatzArray.length && (
        <ul
          className="flex flex-wrap gap-2 w-200 h-75 
               border border-gray-400 p-3 
               overflow-y-auto overflow-x-hidden"
        >
          {collatzArray.map((num, index) => (
            <li key={index} className="flex items-center justify-center">
              {num}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Graph;
