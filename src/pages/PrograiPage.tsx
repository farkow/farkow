import ProjectDetail from "../components/ProjectDetail";

export default function PrograiPage() {
  const prograiProject = {
    title: "Prograi: On-Premise Enterprise AI Code Assistant",
    description:
      "Prograi is a high-security, autonomous AI-powered code assistant tailored for enterprise requirements. Built for absolute privacy, it operates entirely on-premise, handling all requests and model computations locally with zero internet dependency. This ensures that proprietary code and institutional knowledge never leave the secure corporate environment.",
    images: [],
    video: "",
    tags: ["AI", "GenAI", "Local LLM", "On-Premise", "Enterprise Security"],
    contribution:
      "I am the sole creator of Prograi, having architected and developed the entire system from scratch. I engineered the full-stack infrastructure, integrated local Large Language Models for air-gapped environments, and designed the secure processing pipeline to ensure high-performance code assistance without external data exposure.",
    techStack: [""],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...prograiProject} />
      </div>
    </main>
  );
}
