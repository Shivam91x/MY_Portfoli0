// src/components/PageLoader.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function PageLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 350); // smooth delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}