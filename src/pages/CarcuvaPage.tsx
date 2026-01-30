import ProjectDetail from "../components/ProjectDetail";

export default function CarcuvaPage() {
  const carcuvaProject = {
    title: "Carcuva: AI-Driven Interactive Live Picture Frame",
    description:
      "Carcuva transforms static photos into living, emotional portraits designed for tablet-based smart frames. Using advanced AI motion modeling, the app animates single images with a range of realistic emotions. It features built-in presence detection that allows the frame to 'wake up' and greet users as they approach, creating a more interactive and emotionally resonant smart home experience.",
    images: [],
    video: "",
    tags: [
      "AI Animation",
      "Computer Vision",
      "Interactive Art",
      "Smart Home",
      "Emotion AI",
    ],
    contribution:
      "I independently conceived and built Carcuva, architecting the end-to-end system for image-to-video animation. I developed the presence-detection logic using computer vision and engineered the AI pipeline that generates fluid emotional expressions from static images, ensuring high-performance execution on tablet hardware.",
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
      <div className="pt-8">
        <ProjectDetail {...carcuvaProject} />
      </div>
    </main>
  );
}
