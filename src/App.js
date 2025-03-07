// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import "./styles/fonts.css";
import './styles/global.css';
import { imagePaths } from "./utils/data";
import Loader from "./components/Loader";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = imagePaths.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        // Resolve once the image is fully loaded
        img.onload = () => resolve(src);
        // Or reject if something goes wrong
        img.onerror = () => reject(src);
      });
    });

    // Wait until all images are loaded (Promise.all)
    Promise.all(loadImages)
      .then(() => {
        // All images have finished loading
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Image failed to load', err);
        // Even if one fails, you might proceed or handle differently
        setIsLoading(false);
      });
  }, []);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
    <Router>
      <AnimatedRoutes />
    </Router>
  )};
 </>
  )
}

export default App;
