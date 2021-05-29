import React from 'react';
import { Line } from 'react-chartjs-2';

const PieChartHelper = ({ data }) => {
  const chart = () => {
    const dataDisplay = data.map(e => {
      return e;
    });
    return (
      <div>
        <Line
          data={{
            labels: dataDisplay,
            datasets: [
              {
                label: 'Number of cases',
                data: dataDisplay,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
            ],
          }}
          height={300}
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
  return <div style={{ width: '100%' }}>{chart()}</div>;
};

export default PieChartHelper;
