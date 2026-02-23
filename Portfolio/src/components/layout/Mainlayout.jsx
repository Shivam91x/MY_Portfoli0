// MainLayout.jsx
import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-1 px-6">
        <Outlet />
      </main>
      {/* <Footer ></Footer> */}
    </>
  );
}
