import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EntrySection from "./components/EntrySection";
import ExperienceSection from "./components/ExperienceSection";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  // <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNavbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-8 pb-24">
        <EntrySection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
