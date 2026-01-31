import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";

export default function MagdanPage() {
  const magdanProject = {
    title: "Magdan: Local GPU Bitcoin Miner for Developers",
    description:
      "Magdan is a specialized local Bitcoin mining application designed for development and testing purposes. It enables developers to leverage their home GPU to simulate mining operations, test blockchain integrations, and understand the mechanics of Proof of Work (PoW) in a controlled environment without the complexity of large-scale mining pools.",
    images: [],
    video: "",
    tags: [
      "Bitcoin",
      "Crypto Mining",
      "Blockchain",
      "GPU Computing",
      "Proof of Work",
    ],
    contribution:
      "I built Magdan from scratch as the sole developer. I engineered the GPU-accelerated hashing engine, implemented the SHA-256 algorithm optimized for CUDA/OpenCL, and developed the management interface for monitoring hash rates and block discovery simulations.",
    techStack: ["C++", "CUDA", "Python", "Blockchain", "SHA-256", "OpenCL"],
    owned: true,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title="Magdan: Local GPU Bitcoin Miner"
        description="Magdan is a specialized local Bitcoin mining application for development and testing, leveraging GPU acceleration for PoW simulations."
        keywords="Magdan, Bitcoin Mining, GPU Computing, Blockchain, Proof of Work"
      />
      <div className="pt-8">
        <ProjectDetail {...magdanProject} />
      </div>
    </main>
  );
}
