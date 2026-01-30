import ProjectDetail from "../components/ProjectDetail";

export default function ChemondisPage() {
  const chemondisProject = {
    title: "Chemondis: Chemical B2B Marketplace",
    description:
      "A chemical B2B marketplace for chemical suppliers and buyers, including inventory management and order processing.",
    images: ["/img/chemondis.png"],
    video: "",
    tags: ["Chemicals", "Marketplace", "B2B", "Supply Chain", "Procurement"],
    contribution: "",
    techStack: [""],
    owned: false,
    featured: true,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...chemondisProject} />
      </div>
    </main>
  );
}
