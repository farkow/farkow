import ProjectDetail from "../components/ProjectDetail";

export default function MoveitPage() {
  const moveitProject = {
    title: "MoveIT Attack: Technical Analysis",
    description:
      "Technical analysis of the MoveIT attack, including a detailed breakdown of the attack and its impact.",
    images: ["/img/moveit-attack.png"],
    video: "/vid/moveit-attack.mp4",
    tags: ["MoveIT", "Exploit", "Breach", "CVE-2023-34362"],
    contribution: "",
    techStack: [""],
    owned: false,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...moveitProject} />
      </div>
    </main>
  );
}
