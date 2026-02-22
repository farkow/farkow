import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

export default function MoveitPage() {
  const moveitProject = {
    title: m.project_moveit_title(),
    description: m.project_moveit_description(),
    images: [],
    video: "/vid/moveit-attack.mp4",
    tags: ["MoveIT", "Exploit", "Breach", "CVE-2023-34362"],
    contribution: m.project_moveit_contribution(),
    techStack: [
      "BurpSuite",
      "Powershell",
      "Ghidra",
      "Radare2",
      "x64dbg",
      "Wireshark",
      "MySQL",
      "SQL Injection",
      "ASP",
      "SSRF",
      "DLL",
      "JWT",
      "Exchange Server",
      "x509",
      "Windows Server",
    ],
    owned: false,
    featured: false,
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <SEO
        title={m.project_moveit_title()}
        description={m.project_moveit_description()}
        keywords="MoveIT, CVE-2023-34362, SQL Injection, Cybersecurity Analysis, Vulnerability Research"
      />
      <div className="pt-8">
        <ProjectDetail {...moveitProject} />
      </div>
    </main>
  );
}
