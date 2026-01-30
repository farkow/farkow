import { Route, Routes } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ItopsyPage from "./pages/ItopsyPage";
import CarcuvaPage from "./pages/CarcuvaPage";
import SonairePage from "./pages/SonairePage";
import HarmokidPage from "./pages/HarmokidPage";
import NarPage from "./pages/NarPage";
import NetcabalPage from "./pages/NetcabalPage";
import TorunetPage from "./pages/TorunetPage";
import DuvardelenPage from "./pages/DuvardelenPage";
import PrograiPage from "./pages/PrograiPage";
import MagdanPage from "./pages/MagdanPage";
import ChemondisPage from "./pages/ChemondisPage";
import ItsPage from "./pages/ItsPage";
import LitPage from "./pages/LitPage";
import MoveitPage from "./pages/MoveitPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carcuva" element={<CarcuvaPage />} />
        <Route path="/chemondis" element={<ChemondisPage />} />
        <Route path="/duvardelen" element={<DuvardelenPage />} />
        <Route path="/harmokid" element={<HarmokidPage />} />
        <Route path="/itopsy" element={<ItopsyPage />} />
        <Route path="/its" element={<ItsPage />} />
        <Route path="/lit" element={<LitPage />} />
        <Route path="/magdan" element={<MagdanPage />} />
        <Route path="/moveit" element={<MoveitPage />} />
        <Route path="/nar" element={<NarPage />} />
        <Route path="/netcabal" element={<NetcabalPage />} />
        <Route path="/prograi" element={<PrograiPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/sonaire" element={<SonairePage />} />
        <Route path="/torunet" element={<TorunetPage />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}
