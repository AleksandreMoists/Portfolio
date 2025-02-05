import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./Home";  // The component we just created
import ProjectDetail from "./pages/Projects/ProjectDetail";
import "./styles/fonts.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    // <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    // </AnimatePresence>
  );
}

export default App;
