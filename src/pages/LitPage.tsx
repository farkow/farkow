import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function LitPage() {
  const litProject = {
    title: m.project_lit_detail_title(),
    description: m.project_lit_detail_description(),
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
    contribution: m.project_lit_contribution(),
    techStack: ["Go", "SQL", "Oracle", "Unreal Engine 4"],
    owned: false,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_lit_detail_title()}
        description={m.project_lit_detail_description()}
        keywords="Lost in Time, Mixed Reality, Unreal Engine, Virtual Production, Game Show"
      />
      <div className="pt-8">
        <ProjectDetail {...litProject} />
      </div>
    </main>
  );
}
