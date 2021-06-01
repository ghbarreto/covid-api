import React from 'react';
import _ from 'lodash';

import PieChartHelper from './PieChartHelper';

const PieChart = ({ active, deaths, recovered, confirmed }) => {
  if (active[0] || deaths[0] || recovered[0] || confirmed[0] === undefined) {
    return <div>Country not supported by API</div>;
  }

  return (
    <div className="ui grid" style={{ margin: '30px', textAlign: 'center' }}>
      <div className="seven wide column">
        <h1 className="center">Active</h1>
        <PieChartHelper data={active} />
      </div>
      <div className="seven wide column">
        <h1>Deaths</h1>
        <PieChartHelper data={deaths} />
      </div>
      <div className="seven wide column">
        <h1>Recovered</h1>
        <PieChartHelper data={recovered} />
      </div>
      <div className="seven wide column">
        <h1>Confirmed</h1>
        <PieChartHelper data={confirmed} />
      </div>
    </div>
  );
};

export default PieChart;
