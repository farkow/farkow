import ProjectDetail from "../components/ProjectDetail";

export default function TorunetPage() {
  const torunetProject = {
    title: "Torunet: Local-First Investigative Graph Platform",
    description:
      "Torunet is a powerful, local-first investigative graph platform designed to reveal hidden relationships, provenance, and patterns across complex datasets. By prioritizing privacy and native performance, it enables analysts to map intricate data connections and visualize underlying structures directly on their hardware, ensuring absolute data sovereignty and lightning-fast investigative workflows.",
    images: [],
    video: "",
    tags: [
      "Investigation",
      "Graph Database",
      "Local-First",
      "Data Analysis",
      "OSINT",
    ],
    contribution:
      "I am the sole creator of Torunet, having architected and developed the entire platform from the ground up. I engineered the high-performance graph processing engine, designed the local-first storage architecture, and developed the interactive visualization interface to facilitate complex relationship mapping and pattern discovery.",
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
      <div className="pt-8">
        <ProjectDetail {...torunetProject} />
      </div>
    </main>
  );
}
