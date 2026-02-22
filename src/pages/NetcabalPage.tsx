import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function NetcabalPage() {
  const netcabalProject = {
    title: m.project_netcabal_title(),
    description: m.project_netcabal_description(),
    images: [],
    video: "",
    tags: [
      "Visual Editor",
      "Node-Based",
      "Data Visualization",
      "Investigation",
      "Interactive",
    ],
    contribution: m.project_netcabal_contribution(),
    techStack: [
      "Go",
      "Neo4j",
      "React",
      "ReactFlow",
      "Tailwind CSS",
      "Flowbite",
      "TypeScript",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_netcabal_title()}
        description={m.project_netcabal_description()}
        keywords="Netcabal, Visual Editor, Node-Based, Data Visualization, Investigation Tool"
      />
      <div className="pt-8">
        <ProjectDetail {...netcabalProject} />
      </div>
    </main>
  );
}
