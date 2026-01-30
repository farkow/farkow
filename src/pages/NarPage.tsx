import ProjectDetail from "../components/ProjectDetail";

export default function NarPage() {
  const narProject = {
    title: "Nar: An investigation tool...",
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
        <ProjectDetail {...narProject} />
      </div>
    </main>
  );
}
