import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
