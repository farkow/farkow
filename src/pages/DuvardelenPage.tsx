import ProjectDetail from "../components/ProjectDetail";

export default function DuvardelenPage() {
  const duvardelenProject = {
    title:
      "Duvardelen: A healthcare emergency app that uses WiFi to detect human fall and abnormal activity",
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
        <ProjectDetail {...duvardelenProject} />
      </div>
    </main>
  );
}
