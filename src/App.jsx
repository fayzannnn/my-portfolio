import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollProgress from "./components/ScrollProgress";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </>
  );
}
