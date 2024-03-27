import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar';

const Base = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Base;
