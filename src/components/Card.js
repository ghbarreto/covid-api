import React from 'react';
import NumberFormat from 'react-number-format';
import './Card.css';

const Card = ({ title, value, newValue, description, recovered }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          {!description ? (
            <NumberFormat
              thousandSeparator={true}
              value={value}
              displayType={'text'}
            />
          ) : (
            <div></div>
          )}
          {newValue ? (
            <span style={{ margin: '20px', color: 'salmon' }}>
              <i className="arrow up icon"></i>
              <NumberFormat
                thousandSeparator={true}
                value={newValue || null}
                displayType={'text'}
              />
            </span>
          ) : (
            <div> </div>
          )}

          {recovered ? (
            <span style={{ margin: '20px', color: 'green' }}>
              <i className="arrow up icon"></i>
              <NumberFormat
                thousandSeparator={true}
                value={recovered}
                displayType={'text'}
              />
            </span>
          ) : (
            <div> </div>
          )}

          {description && title && value && !newValue ? (
            <div>
              <img
                style={{ width: '20px', height: '20px' }}
                src="https://cdn.iconscout.com/icon/free/png-256/coronavirus-death-2389061-2014539.png"
                alt=""
              />
              <span style={{ margin: '20px' }}>
                <NumberFormat
                  thousandSeparator={true}
                  value={value || null}
                  displayType={'text'}
                />
              </span>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
