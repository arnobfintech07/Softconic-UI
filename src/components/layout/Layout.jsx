import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScriptLoader from './ScriptLoader';

const Layout = () => {
  return (
    <>
      <ScriptLoader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

