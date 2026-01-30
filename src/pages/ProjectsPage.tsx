import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Checkbox } from "flowbite-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  link: string;
  isOwned: boolean;
  isCompany: boolean;
  isFeatured: boolean;
  priority?: number;
}

const PROJECTS: Project[] = [
  {
    title: "Itopsy: AI-powered, no-code pentesting",
    description:
      "An AI-powered, node-based, visual penetration testing platform.",
    images: ["/img/itopsy.png"],
    link: "/itopsy",
    isOwned: true,
    isCompany: false,
    isFeatured: true,
    priority: 50,
  },
  {
    title: "Secure Coding for Enterprises",
    description:
      "Enterprise secure coding policy which is compliant with NIST SSDF and OWASP Secure Coding Practices, including a code review process with code scanners and AI, a security training program, and a security testing process.",
    images: ["/img/secure-coding.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
    priority: 46,
  },
  {
    title: "Hardened Linux Workspace for Enterprises",
    description:
      "Enterprise hardened Linux workspace for secure coding and development, including limiting access to public packages, role-based remote access control, and custom security configurations.",
    images: ["/img/hardened-linux.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 45,
  },
  {
    title: "MoveIT Attack: Technical Analysis",
    description:
      "Technical analysis of the MoveIT attack, including a detailed breakdown of the attack and its impact.",
    images: ["/img/moveit-attack.png"],
    link: "/moveit",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 42,
  },
  {
    title: "Digital Currency Security",
    description:
      "Securing digital currency transactions and exchanges in compliance with PCI DSS, including offline payments, cold storage, and hardware wallets.",
    images: ["/img/digital-currency.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
    priority: 48,
  },
  {
    title: "Aircraft 3D Editor w/ Procurement",
    description:
      "Designing and procuring commercial aircraft, including supply chain management and production planning.",
    images: ["/img/aircraft-editor.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 41,
  },
  {
    title: "3D WebGL Auto Editor",
    description:
      "A 3D WebGL automotive editor for interior and external design with pricing and inventory management.",
    images: ["/img/auto-editor.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 40,
  },
  {
    title: "Insurance Coach Automation",
    description:
      "An insurance coach assistant for insurance agents and brokers, including a knowledge base, a personalized coaching program, and automation.",
    images: ["/img/insurance-coach.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 44,
  },
  {
    title: "Chemical B2B Marketplace",
    description:
      "A chemical B2B marketplace for chemical suppliers and buyers, including inventory management and order processing.",
    images: ["/img/chemondis.png"],
    link: "/chemondis",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
    priority: 47,
  },
  {
    title: "Mixed Reality TV Show",
    description:
      "Lost In Time is a Norwegian game show that aired on TV Norge March 25th 2017. It combines interactive mixed reality technology with virtual production to transport contestants to different landscapes scattered across time and space and is all based on Epic's UNREAL Engine 4 game Engine.",
    images: ["/img/lit.png"],
    link: "/lit",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 39,
  },
  {
    title: "Pharmaceutical Track & Trace",
    description:
      "It is created in order to prevent fraud in pharmaceuticals, maintain patient security and monitor pharmaceuticals at every stage. It has been implemented in this scope for the first time in the world.",
    images: ["/img/its.png"],
    link: "/its",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
    priority: 49,
  },
  {
    title: "KYK.NET",
    description:
      "Through this application, you can perform many transactions electronically, such as dormitory applications, scholarship applications, and dormitory registration fee payments.",
    images: ["/img/kyknet.png"],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
    priority: 43,
  },
];

export default function ProjectsPage() {
  const [filterOwned, setFilterOwned] = useState(true);
  const [filterCompany, setFilterCompany] = useState(true);
  const [filterFeatured, setFilterFeatured] = useState(false);

  const filteredProjects = PROJECTS.filter((project) => {
    const typeMatch =
      (filterOwned && project.isOwned) || (filterCompany && !project.isOwned);
    const sizeMatch = !filterFeatured || project.isFeatured;
    return typeMatch && sizeMatch;
  }).sort((a, b) => {
    // Sort by priority first (descending)
    const priorityA = a.priority || 0;
    const priorityB = b.priority || 0;
    if (priorityA !== priorityB) return priorityB - priorityA;
    // Then sort by isFeatured
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pt-12 pb-32">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="h-18 bg-linear-to-r from-white to-slate-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Contributions and My Own Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          A selection of my featured contributions and own projects, ranging
          from complex data platforms to AI-integrated development tools.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_owned"
                aria-label="Show my own projects"
                checked={filterOwned}
                onChange={(e) => setFilterOwned(e.target.checked)}
              />
              <label
                htmlFor="filter_owned"
                className={`cursor-pointer text-sm transition-colors ${
                  filterOwned ? "text-slate-100" : "text-slate-500"
                }`}
              >
                Show my own projects
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_company"
                aria-label="Show company projects"
                checked={filterCompany}
                onChange={(e) => setFilterCompany(e.target.checked)}
              />
              <label
                htmlFor="filter_company"
                className={`cursor-pointer text-sm transition-colors ${
                  filterCompany ? "text-slate-100" : "text-slate-500"
                }`}
              >
                Show company projects
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_featured"
                aria-label="Show only featured"
                checked={filterFeatured}
                onChange={(e) => setFilterFeatured(e.target.checked)}
              />
              <label
                htmlFor="filter_featured"
                className={`cursor-pointer text-sm transition-colors ${
                  filterFeatured ? "text-slate-100" : "text-slate-500"
                }`}
              >
                Show only featured
              </label>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Showing{" "}
            <span className="text-slate-300">{filteredProjects.length}</span> of{" "}
            <span className="text-slate-300">{PROJECTS.length}</span> projects
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <p className="text-xl text-slate-500">
            No projects match your current filters.
          </p>
          <button
            onClick={() => {
              setFilterOwned(true);
              setFilterCompany(true);
              setFilterFeatured(false);
            }}
            className="font-semibold text-purple-500 hover:text-purple-400"
          >
            Reset all filters
          </button>
        </div>
      )}
    </main>
  );
}
