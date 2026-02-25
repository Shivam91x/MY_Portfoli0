// MainLayout.jsx
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import CustomCursor from "../UI/CustomCursor"


export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // 1️⃣ Save current route on every route change
  useEffect(() => {
    sessionStorage.setItem("lastRoute", location.pathname);
  }, [location.pathname]);

  // 2️⃣ Restore last route on first load
  useEffect(() => {
    const lastRoute = sessionStorage.getItem("lastRoute");
    if (lastRoute && lastRoute !== location.pathname) {
      navigate(lastRoute, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <>
    {/* <CustomCursor /> */}
      {/* <Navbar /> */}
      <main className="pt-1 px-6">
        <Outlet />
      </main>
      {/* <Footer ></Footer> */}
    </>
  );
}
