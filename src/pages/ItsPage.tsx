import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function ItsPage() {
  const itsProject = {
    title: m.project_its_detail_title(),
    description: m.project_its_detail_description(),
    images: ["/img/its-1.png", "/img/its-2.png"],
    video: "/vid/its.mp4",
    tags: ["Pharma", "Track", "Trace", "Fraud", "Patient", "Monitor"],
    contribution: m.project_its_contribution(),
    techStack: ["PHP", "MySQL", "Javascript", "MySQL", "REST", "JWT"],
    owned: false,
    featured: true,
    link: "https://www.drugtrackandtrace.com/drug-track-and-trace-system/",
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_its_detail_title()}
        description={m.project_its_detail_description()}
        keywords="Pharma, Track & Trace, Drug Safety, Fraud Prevention, Cybersecurity"
      />
      <div className="pt-8">
        <ProjectDetail {...itsProject} />
      </div>
    </main>
  );
}
