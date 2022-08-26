import { Outlet } from 'react-router-dom';
import Menu from './Menu';

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default Layout;
