import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from 'react-hot-toast';
import "../index.css"
const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Toaster  toastOptions={{style: { background: 'white', color: 'green'}}} containerStyle={{ bottom: 80 }} position="bottom-center" />
    </div>
  )
}

export default Layout