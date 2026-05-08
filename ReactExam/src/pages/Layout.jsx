import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from 'react-hot-toast';
import "../index.css"
import "@fontsource/fira-sans";
import '@fontsource/libre-barcode-39';
import Footer from "../components/footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hideHeader = location.pathname === "/";
  const hideFooter = location.pathname === "/";
  
  return (
    <>
        {!hideHeader && <Header />}
        <Outlet />
        {!hideFooter && <Footer />}
        <Toaster  toastOptions={{style: { background: 'white', color: 'green'}}} containerStyle={{ bottom: 100}} position="bottom-center" />
    </>
  )
}

export default Layout