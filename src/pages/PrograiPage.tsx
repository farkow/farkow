import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function PrograiPage() {
  const prograiProject = {
    title: m.project_prograi_title(),
    description: m.project_prograi_description(),
    images: [],
    video: "",
    tags: ["AI", "GenAI", "Local LLM", "On-Premise", "Enterprise Security"],
    contribution: m.project_prograi_contribution(),
    techStack: [
      "Python",
      "Llama",
      "OpenCode",
      "Redis",
      "PostgreSQL",
      "Go",
      "React/Typescript",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_prograi_title()}
        description={m.project_prograi_description()}
        keywords="Prograi, Enterprise AI, On-Premise LLM, Private AI, Secure Coding"
      />
      <div className="pt-8">
        <ProjectDetail {...prograiProject} />
      </div>
    </main>
  );
}
