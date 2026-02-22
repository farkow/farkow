import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import EntrySection from "../components/EntrySection";
import ExperienceSection from "../components/ExperienceSection";
import FeaturedSection from "../components/FeaturedSection";
import SkillsSection from "../components/SkillsSection";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function LandingPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-8 pb-24">
      <SEO
        title={m.nav_entry()}
        description={m.entry_subtitle()}
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
