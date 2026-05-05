import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from 'react-hot-toast';
import "../index.css"
import "@fontsource/fira-sans";
import '@fontsource/libre-barcode-39';
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <Toaster  toastOptions={{style: { background: 'white', color: 'green'}}} containerStyle={{ bottom: 100}} position="bottom-center" />
    </>
  )
}

export default Layout