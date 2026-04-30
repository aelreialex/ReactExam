import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from './pages/landingPage/LandingPage';
import EventPage from './pages/eventPage/EventPage';
import EventInfoPage from './pages/eventInfoPage/EventInfoPage';
import OrderPage from './pages/orderPage/OrderPage';
import TicketPage from './pages/tickerPage/TicketPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "EventPage", element: <EventPage /> },
      { path: "EventInfoPage/:id", element: <EventInfoPage /> },
      { path: "OrderPage", element: <OrderPage /> },
      { path: "TicketPage", element: <TicketPage />},

    ],
  },
]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
