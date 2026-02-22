import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";

export default function UrugumPage() {
  const urugumProject = {
    title: "Urugum: Graph-Based E-Devlet Family Genealogy",
    description:
      "Urugum is a specialized genealogical tool that transforms data from Türkiye's E-Devlet platform into complex, multi-generational family trees. By utilizing graph database technology, it enables users to visualize and navigate combined family lineages, uncovering intricate ancestral connections and historical patterns that are difficult to trace through traditional records.",
    images: ["/img/urugum-1.png", "/img/urugum-2.png"],
    video: "",
    tags: [
      "Genealogy",
      "Graph Database",
      "E-Devlet",
      "Data Visualization",
      "Family Tree",
    ],
    contribution:
      "Co-created from scratch with my close friend Ilgin Yildiz, I focused on architecting the graph data model and developing the data parsing engine. Together, we engineered the logic for handling complex relationship nodes and designed the interactive frontend to provide a seamless exploration of large-scale family networks.",
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
        title="Urugum: Graph-Based Family Genealogy"
        description="Urugum transforms Türkiye's e-Devlet data into interactive family trees using graph database technology."
        keywords="Urugum, Genealogy, Graph Database, Family Tree, e-Devlet, Data Visualization"
      />
      <div className="pt-8">
        <ProjectDetail {...urugumProject} />
      </div>
    </main>
  );
}
