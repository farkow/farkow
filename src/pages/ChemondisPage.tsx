import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function ChemondisPage() {
  const chemondisProject = {
    title: m.project_chemondis_detail_title(),
    description: m.project_chemondis_detail_description(),
    images: [
      "/img/chemondis-1.png",
      "/img/chemondis-2.png",
      "/img/chemondis-3.png",
      "/img/chemondis-4.png",
    ],
    video: "/vid/chemondis.mp4",
    tags: ["Chemicals", "Marketplace", "B2B", "Supply Chain", "Procurement"],
    contribution: m.project_chemondis_contribution(),
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "REST",
      "JWT",
      "OAuth2",
      "Redis",
    ],
    owned: false,
    featured: true,
    link: "https://chemondis.com/",
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_chemondis_detail_title()}
        description={m.project_chemondis_detail_description()}
        keywords="Chemondis, B2B Marketplace, Chemicals, Supply Chain, Procurement"
      />
      <div className="pt-8">
        <ProjectDetail {...chemondisProject} />
      </div>
    </main>
  );
}
