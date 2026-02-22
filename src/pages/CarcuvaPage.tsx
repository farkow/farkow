import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function CarcuvaPage() {
  const carcuvaProject = {
    title: m.project_carcuva_title(),
    description: m.project_carcuva_description(),
    images: [],
    video: "",
    tags: [
      "AI Animation",
      "Computer Vision",
      "Interactive Art",
      "Smart Home",
      "Emotion AI",
    ],
    contribution: m.project_carcuva_contribution(),
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "React",
      "FFMPEG",
      "Motion Modeling",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_carcuva_title()}
        description={m.project_carcuva_description()}
        keywords="Carcuva, AI Animation, Interactive Art, Smart Home, Emotion AI"
      />
      <div className="pt-8">
        <ProjectDetail {...carcuvaProject} />
      </div>
    </main>
  );
}
