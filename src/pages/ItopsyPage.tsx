import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";

export default function ItopsyPage() {
  const itopsyProject = {
    title: "Itopsy: AI-powered, no-code pentesting",
    description:
      "An AI-powered, node-based, visual penetration testing platform that enables security professionals and developers to automate complex security assessments without writing a single line of code.",
    images: [],
    video: "/vid/itopsy.mp4",
    tags: [
      "Cybersecurity",
      "AI",
      "No-Code",
      "Pentesting",
      "Node-based",
      "Automated",
    ],
    contribution:
      "I designed and implemented the entire core engine of Itopsy, including the node-based visual editor, the AI orchestration layer for automated vulnerability discovery, and the backend infrastructure that executes security tests in isolated environments.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Tailored AI Assistant",
    ],
    owned: true,
    featured: true,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title="Itopsy: AI-powered, no-code pentesting"
        description="Learn about Itopsy, an AI-powered, node-based, visual penetration testing platform that automates complex security assessments."
        keywords="Itopsy, Pentesting, AI Security, No-Code, Cybersecurity Automation"
      />
      <div className="pt-8">
        <ProjectDetail {...itopsyProject} />
      </div>
    </main>
  );
}
