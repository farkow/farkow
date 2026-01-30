import ProjectDetail from "../components/ProjectDetail";

export default function LitPage() {
  const litProject = {
    title: "Lost in Time: Mixed Reality TV Show",
    description:
      "Lost In Time is a Norwegian game show that aired on TV Norge March 25th 2017. It combines interactive mixed reality technology with virtual production to transport contestants to different landscapes scattered across time and space and is all based on Epic's UNREAL Engine 4 game Engine.",
    images: ["/img/lit-1.png", "/img/lit-2.png", "/img/lit-3.png"],
    video: "/vid/lit.mp4",
    tags: [
      "Mixed Reality",
      "TV Show",
      "Unreal Engine 4",
      "Virtual Production",
      "Real-time Rendering",
      "Game Engine",
      "Broadcast",
      "Entertainment",
    ],
    contribution:
      "I was responsible for the backend architecture and implementing secure coding standards for this innovative mixed reality production. My work encompassed network security management, rigorous security testing, and significant performance optimization of the SQL database layer. I successfully identified and resolved critical performance bottlenecks, ensuring seamless operation for the high-demand real-time virtual production environment.",
    techStack: ["Go", "SQL", "Oracle", "Unreal Engine 4"],
    owned: false,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...litProject} />
      </div>
    </main>
  );
}
