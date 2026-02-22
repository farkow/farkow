import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function HarmokidPage() {
  const harmokidProject = {
    title: m.project_harmokid_title(),
    description: m.project_harmokid_description(),
    images: [],
    video: "",
    tags: [
      "AI Music Generation",
      "EdTech",
      "Educational Content",
      "Automation",
      "Video Synthesis",
    ],
    contribution: m.project_harmokid_contribution(),
    techStack: [
      "Python",
      "PyTorch",
      "FFMPEG",
      "OpenAI API",
      "Stable Audio",
      "Suno/Udio API",
      "PostgreSQL",
    ],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_harmokid_title()}
        description={m.project_harmokid_description()}
        keywords="HarmoKid, EdTech, AI Music, Educational Content, Video Synthesis"
      />
      <div className="pt-8">
        <ProjectDetail {...harmokidProject} />
      </div>
    </main>
  );
}
