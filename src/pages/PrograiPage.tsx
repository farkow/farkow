import ProjectDetail from "../components/ProjectDetail";

export default function PrograiPage() {
  const prograiProject = {
    title: "Prograi: AI-powered code assistant",
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
        <ProjectDetail {...prograiProject} />
      </div>
    </main>
  );
}
