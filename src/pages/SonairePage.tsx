import ProjectDetail from "../components/ProjectDetail";

export default function SonairePage() {
  const sonaireProject = {
    title: "Sonaire: AI-Driven Social Media Quiz Automation",
    description:
      "Sonaire is an automated content creation platform that generates multilingual social media quizzes using AI. It dynamically produces high-quality video quizzes across various subjects and difficulty levels, utilizing advanced video processing to format and publish content directly to social media channels, streamlining the engagement process for digital creators.",
    images: [],
    video: "",
    tags: [
      "AI Content Generation",
      "Automation",
      "Social Media",
      "Video Processing",
      "Quiz Generator",
    ],
    contribution:
      "I built Sonaire from scratch, developing the entire automation pipeline. I engineered the AI logic for multilingual question generation, integrated FFMPEG for dynamic video rendering, and developed the automated publishing system to seamlessly deliver content across multiple social media platforms.",
    techStack: ["Python", "FFMPEG", "OpenAI API", "MoviePy", "PostgreSQL"],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...sonaireProject} />
      </div>
    </main>
  );
}
