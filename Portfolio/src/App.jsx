import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
