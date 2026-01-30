import ProjectDetail from "../components/ProjectDetail";

export default function ItsPage() {
  const itsProject = {
    title: "Pharmaceutical Track & Trace System",
    description:
      "It is created in order to prevent fraud in pharmaceuticals, maintain patient security and monitor pharmaceuticals at every stage. It has been implemented in this scope for the first time in the world.",
    images: ["/img/its.png"],
    video: "/vid/its.mp4",
    tags: ["Pharma", "Track", "Trace", "Fraud", "Patient", "Monitor"],
    contribution: "",
    techStack: [""],
    owned: false,
    featured: true,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...itsProject} />
      </div>
    </main>
  );
}
