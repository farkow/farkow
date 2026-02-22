import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function TorunetPage() {
  const torunetProject = {
    title: m.project_torunet_title(),
    description: m.project_torunet_description(),
    images: [],
    video: "",
    tags: [
      "Investigation",
      "Graph Database",
      "Local-First",
      "Data Analysis",
      "OSINT",
    ],
    contribution: m.project_torunet_contribution(),
    techStack: [
      "Go",
      "React",
      "TypeScript",
      "Node.js",
      "Neo4j",
      "Tailwind CSS",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_torunet_title()}
        description={m.project_torunet_description()}
        keywords="Torunet, Graph Platform, OSINT, Data Analysis, Local-First, Investigative Tool"
      />
      <div className="pt-8">
        <ProjectDetail {...torunetProject} />
      </div>
    </main>
  );
}
