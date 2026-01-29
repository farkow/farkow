import { Route, Routes } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ItopsyPage from "./pages/ItopsyPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/itopsy" element={<ItopsyPage />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}
