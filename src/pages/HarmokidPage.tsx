import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";

export default function HarmokidPage() {
  const harmokidProject = {
    title: "HarmoKid: AI-Powered Educational Song Generator",
    description:
      "HarmoKid is an innovative educational platform that leverages AI to generate original songs designed to teach children about important safety and health topics. The system automatically creates relatable lyrics, composes synchronized audio, and renders engaging videos, providing a complete multimedia learning experience that is automatically formatted and published to social media channels.",
    images: [],
    video: "",
    tags: [
      "AI Music Generation",
      "EdTech",
      "Educational Content",
      "Automation",
      "Video Synthesis",
    ],
    contribution:
      "I built HarmoKid from the ground up, architecting the entire multimodal AI pipeline. I engineered the integration between Large Language Models for lyrics, text-to-speech and music generation models for audio, and dynamic video rendering systems, while also developing the automated social media publishing workflow to deliver educational content at scale.",
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
        title="HarmoKid: AI-Powered Educational Song Generator"
        description="HarmoKid uses AI to generate original educational songs and videos for children on safety and health topics."
        keywords="HarmoKid, EdTech, AI Music, Educational Content, Video Synthesis"
      />
      <div className="pt-8">
        <ProjectDetail {...harmokidProject} />
      </div>
    </main>
  );
}
