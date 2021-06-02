import React from 'react';
import NumberFormat from 'react-number-format';
import Card from '../Card';

class DisplayTerritories extends React.Component {
  displayTerritoriesFields() {
    const { territories } = this.props;
    let uniq = [];

    if (territories) {
      const results = territories.reduce((acc, cur) => {
        acc[cur.Province] !== undefined
          ? (acc[cur.Province] = Math.max(acc[cur.Province], cur.Deaths))
          : (acc[cur.Province] = cur.Deaths);
        return acc;
      }, {});

      const keys = Object.keys(results);

      return keys.map(key => {
        if (key) {
          return <Card title={key} value={results[key]} description="Deaths" />;
        }
        return <div>This country territories are not supported by the API</div>;
      });
    }
    return <div></div>;
  }
  render() {
    return (
      <div
        className="ui link cards"
        style={{ justifyContent: 'center', marginTop: '30px' }}
      >
        {this.displayTerritoriesFields()}
      </div>
    );
  }
}

export default DisplayTerritories;
