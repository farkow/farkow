import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import EntrySection from "../components/EntrySection";
import ExperienceSection from "../components/ExperienceSection";
import FeaturedSection from "../components/FeaturedSection";
import SkillsSection from "../components/SkillsSection";

export default function LandingPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-8 pb-24">
      <EntrySection />
      <FeaturedSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
