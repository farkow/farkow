import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";

export default function ItsPage() {
  const itsProject = {
    title: "Pharmaceutical Track & Trace System",
    description:
      "It is created in order to prevent fraud in pharmaceuticals, maintain patient security and monitor pharmaceuticals at every stage. It has been implemented in this scope for the first time in the world.",
    images: ["/img/its-1.png", "/img/its-2.png"],
    video: "/vid/its.mp4",
    tags: ["Pharma", "Track", "Trace", "Fraud", "Patient", "Monitor"],
    contribution:
      "I engineered the high-security administrative backend for this pioneering pharmaceutical tracking platform as a subcontractor of Tiga Healthcare Technologies. My work focused on architecting a robust database and implementing comprehensive cybersecurity protocols for the platform's administrative functions, ensuring the absolute integrity of drug safety data and preventing fraudulent activities across the global supply chain.",
    techStack: ["PHP", "MySQL", "Javascript", "MySQL", "REST", "JWT"],
    owned: false,
    featured: true,
    link: "https://www.drugtrackandtrace.com/drug-track-and-trace-system/",
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title="Pharmaceutical Track & Trace System"
        description="A pioneering pharmaceutical tracking platform designed to prevent fraud, maintain patient security, and monitor drug supply chains."
        keywords="Pharma, Track & Trace, Drug Safety, Fraud Prevention, Cybersecurity"
      />
      <div className="pt-8">
        <ProjectDetail {...itsProject} />
      </div>
    </main>
  );
}
