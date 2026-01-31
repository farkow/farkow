import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import EntrySection from "../components/EntrySection";
import ExperienceSection from "../components/ExperienceSection";
import FeaturedSection from "../components/FeaturedSection";
import SkillsSection from "../components/SkillsSection";
import SEO from "../components/SEO";

export default function LandingPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-8 pb-24">
      <SEO
        title="Home"
        description="Senior Software & Security Leader specializing in Secure by Design, Cloud-Native architecture, and AI-Enhanced solutions with 15+ years of expertise."
        keywords="Software Security, Cloud-Native, AI, Murat Aydin, Full-Stack, Cybersecurity"
      />
      <EntrySection />
      <FeaturedSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
