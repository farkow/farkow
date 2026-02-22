import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function DuvardelenPage() {
  const duvardelenProject = {
    title: m.project_duvardelen_title(),
    description: m.project_duvardelen_description(),
    images: [],
    video: "",
    tags: [
      "WiFi-Based Tracking",
      "Pose Estimation",
      "Elderly Care",
      "Action Recognition",
      "Healthcare AI",
    ],
    contribution: m.project_duvardelen_contribution(),
    techStack: [
      "Python",
      "Rust",
      "PyTorch",
      "FastAPI",
      "CSI (Channel State Information)",
      "MIMO",
      "Linux",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_duvardelen_title()}
        description={m.project_duvardelen_description()}
        keywords="Duvardelen, WiFi Tracking, Pose Estimation, Fall Detection, Healthcare AI"
      />
      <div className="pt-8">
        <ProjectDetail {...duvardelenProject} />
      </div>
    </main>
  );
}
