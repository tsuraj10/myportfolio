import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen dynamic-bg">
      <Outlet />
    </div>
  );
};

export default Layout;
