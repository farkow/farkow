import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function MagdanPage() {
  const magdanProject = {
    title: m.project_magdan_title(),
    description: m.project_magdan_description(),
    images: [],
    video: "",
    tags: [
      "Bitcoin",
      "Crypto Mining",
      "Blockchain",
      "GPU Computing",
      "Proof of Work",
    ],
    contribution: m.project_magdan_contribution(),
    techStack: ["C++", "CUDA", "Python", "Blockchain", "SHA-256", "OpenCL"],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_magdan_title()}
        description={m.project_magdan_description()}
        keywords="Magdan, Bitcoin Mining, GPU Computing, Blockchain, Proof of Work"
      />
      <div className="pt-8">
        <ProjectDetail {...magdanProject} />
      </div>
    </main>
  );
}
