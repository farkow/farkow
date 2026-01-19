import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EntrySection from "./components/EntrySection";
import ExperienceSection from "./components/ExperienceSection";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import SkillsSection from "./components/SkillsSection";
import {
  certifications,
  companyExperience,
  offensiveTools,
  programmingSkills
} from "./data/profile";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <EntrySection />
        <ExperienceSection companies={companyExperience} />
        <SkillsSection
          programmingSkills={programmingSkills}
          offensiveTools={offensiveTools}
        />
        <CertificationsSection certifications={certifications} />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
