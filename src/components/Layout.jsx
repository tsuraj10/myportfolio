import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gradient-to-b from-black via-gray-900 to-black" >
      <Outlet />
    </div>
  );
};

export default Layout;
