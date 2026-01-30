import ProjectDetail from "../components/ProjectDetail";

export default function SonairePage() {
  const sonaireProject = {
    title: "Sonaire: ...",
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
        <ProjectDetail {...sonaireProject} />
      </div>
    </main>
  );
}
