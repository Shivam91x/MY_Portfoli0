import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import PageLoader from "./components/ProgressLoader";
import AboutCheck from "./pages/AboutCheck";

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutcheck" element={<AboutCheck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
