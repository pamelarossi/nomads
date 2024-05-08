import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <h1>NOMADS</h1>
      <div>Hello User</div>
    </div>
  );
}

export default Header;
