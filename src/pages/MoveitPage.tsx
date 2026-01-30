import ProjectDetail from "../components/ProjectDetail";

export default function MoveitPage() {
  const moveitProject = {
    title: "MoveIT Attack: Technical Analysis",
    description:
      "CVE-2023-34362 is a critical zero-day SQL injection vulnerability in the Progress MOVEit Transfer web application. This flaw allowed unauthenticated, remote attackers to gain full access to the MOVEit Transfer database and potentially execute arbitrary code on the server. Exploited by the Cl0p ransomware group, this vulnerability had a global impact, leading to significant data breaches across numerous organizations.",
    images: [],
    video: "/vid/moveit-attack.mp4",
    tags: ["MoveIT", "Exploit", "Breach", "CVE-2023-34362"],
    contribution:
      "I performed a comprehensive technical analysis of the MOVEit Transfer attack, specifically investigating the CVE-2023-34362 exploit chain. My work involved deconstructing the SQL injection vulnerability, analyzing the mechanism used for privilege escalation via API access tokens, and documenting the subsequent deployment of the 'human2.aspx' web shell. This research provided critical insights into the attack's lifecycle, from initial unauthenticated access to full server compromise and data exfiltration.",
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
      <div className="pt-8">
        <ProjectDetail {...moveitProject} />
      </div>
    </main>
  );
}
