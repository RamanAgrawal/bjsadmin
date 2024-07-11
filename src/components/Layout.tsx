
import { Outlet } from 'react-router-dom';
import SidePanel from './SidePanel';

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <SidePanel />
      <main style={{ marginLeft: '200px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
