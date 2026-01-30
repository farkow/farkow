import ProjectDetail from "../components/ProjectDetail";

export default function DuvardelenPage() {
  const duvardelenProject = {
    title: "Duvardelen: WiFi-Based Fall Detection & Pose Estimation",
    description:
      "Duvardelen is a production-ready healthcare monitoring system that utilizes WiFi signals for dense human pose estimation through walls. Based on a custom implementation of InvisPose, it leverages Channel State Information (CSI) from standard mesh routers to perform real-time full-body tracking. The system is specifically optimized for elderly care, detecting falls and abnormal activities without the privacy concerns of traditional camera-based monitoring.",
    images: [],
    video: "",
    tags: [
      "WiFi-Based Tracking",
      "Pose Estimation",
      "Elderly Care",
      "Action Recognition",
      "Healthcare AI",
    ],
    contribution:
      "I independently developed Duvardelen by building upon the wifi-denponse research repository. I engineered the end-to-end production pipeline, including the real-time signal processing link, human activity recognition models for fall detection, and the alerting system, turning a research concept into a functional healthcare application.",
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
      <div className="pt-8">
        <ProjectDetail {...duvardelenProject} />
      </div>
    </main>
  );
}
