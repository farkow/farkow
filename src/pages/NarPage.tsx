import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function NarPage() {
  const narProject = {
    title: m.project_nar_title(),
    description: m.project_nar_description(),
    images: ["/img/nar-1.png", "/img/nar-2.png"],
    video: "",
    tags: [
      "Genealogy",
      "Graph Database",
      "E-Devlet",
      "Data Visualization",
      "Family Tree",
    ],
    contribution: m.project_nar_contribution(),
    techStack: [
      "Python",
      "Neo4j",
      "Cypher",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_nar_title()}
        description={m.project_nar_description()}
        keywords="Nar, Genealogy, Graph Database, Family Tree, e-Devlet, Data Visualization"
      />
      <div className="pt-8">
        <ProjectDetail {...narProject} />
      </div>
    </main>
  );
}
