import ProjectDetail from "../components/ProjectDetail";

export default function NetcabalPage() {
  const netcabalProject = {
    title: "Netcabal: Interactive Conspiracy Theory Editor",
    description:
      "Netcabal is a dynamic, web-based visual editor designed for mapping and exploring complex conspiracy theories. Using an intuitive node-based interface, it allows users to connect disparate events, individuals, and organizations to visualize intricate webs of influence and causation in a highly interactive environment.",
    images: [],
    video: "",
    tags: [
      "Visual Editor",
      "Node-Based",
      "Data Visualization",
      "Investigation",
      "Interactive",
    ],
    contribution:
      "I built Netcabal from scratch as the sole developer, architecting the entire visual engine and node logic. I developed the interactive graphing system using ReactFlow, ensuring a highly responsive and intuitive user experience for mapping complex relational data.",
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
      <div className="pt-8">
        <ProjectDetail {...netcabalProject} />
      </div>
    </main>
  );
}
