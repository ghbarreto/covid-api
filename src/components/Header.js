import React from 'react';

const Header = () => {
  return (
    <div class="ui menu">
      <img
        style={{
          width: '80px',
          height: '80px',
          marginLeft: '10px',
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coronavirus_icon.svg/180px-Coronavirus_icon.svg.png"
        alt="covid image"
      />
    </div>
  );
};

export default Header;
