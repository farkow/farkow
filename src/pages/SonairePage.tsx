import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function SonairePage() {
  const sonaireProject = {
    title: m.project_sonaire_title(),
    description: m.project_sonaire_description(),
    images: [],
    video: "",
    tags: [
      "AI Content Generation",
      "Automation",
      "Social Media",
      "Video Processing",
      "Quiz Generator",
    ],
    contribution: m.project_sonaire_contribution(),
    techStack: ["Python", "FFMPEG", "OpenAI API", "MoviePy", "PostgreSQL"],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_sonaire_title()}
        description={m.project_sonaire_description()}
        keywords="Sonaire, AI Automation, Content Creation, Quiz Generator, Social Media Marketing"
      />
      <div className="pt-8">
        <ProjectDetail {...sonaireProject} />
      </div>
    </main>
  );
}
