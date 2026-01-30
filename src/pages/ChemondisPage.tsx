import ProjectDetail from "../components/ProjectDetail";

export default function ChemondisPage() {
  const chemondisProject = {
    title: "Chemondis: Chemical B2B Marketplace",
    description:
      "CheMondis is a leading global B2B online marketplace specifically designed for the professional trade of industrial chemicals. Founded as a venture of LANXESS, it connects verified suppliers with thousands of buying companies, digitizing the complex chemical supply chain and offering a transparent, secure environment for sourcing over 50,000 products.",
    images: [
      "/img/chemondis-1.png",
      "/img/chemondis-2.png",
      "/img/chemondis-3.png",
      "/img/chemondis-4.png",
    ],
    video: "/vid/chemondis.mp4",
    tags: ["Chemicals", "Marketplace", "B2B", "Supply Chain", "Procurement"],
    contribution:
      "I served as the Technical Lead for the CheMondis platform from its early development stages through to successful customer delivery. In this role, I spearheaded a diverse, international team of specialists, coordinating cross-border collaboration and managing varied skill sets to ensure project milestones were met. Beyond my leadership responsibilities, I was deeply involved in the core backend programming, where I focused on architecting secure, scalable systems and optimizing database performance to handle the demands of a global B2B marketplace.",
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "REST",
      "JWT",
      "OAuth2",
      "Redis",
    ],
    owned: false,
    featured: true,
    link: "https://chemondis.com/",
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-8">
        <ProjectDetail {...chemondisProject} />
      </div>
    </main>
  );
}
