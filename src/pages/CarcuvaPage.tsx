import ProjectDetail from "../components/ProjectDetail";

export default function CarcuvaPage() {
  const carcuvaProject = {
    title: "Carcuva: ...",
    description: "",
    images: [],
    video: "",
    tags: [],
    contribution: "",
    techStack: [""],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...carcuvaProject} />
      </div>
    </main>
  );
}
