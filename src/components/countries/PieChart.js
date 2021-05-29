import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

const PieChart = ({ active, info, apiConfig }) => {
  const chart = () => {
    const data = active.map(e => {
      return e;
    });

    return (
      <div>
        <Line
          data={{
            labels: data,
            datasets: [
              {
                label: 'Number of cases',
                data: data,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    );
  };
  return <div>{chart()}</div>;
};

export default PieChart;
