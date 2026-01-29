import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Checkbox } from "flowbite-react";

const PROJECTS = [
  {
    title: "Itopsy: No-code pentesting",
    description:
      "An AI-powered, node-based, visual penetration testing platform.",
    images: [
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1634245482486-01004231a957?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "/itopsy",
    isOwned: true,
    isCompany: false,
    isFeatured: true,
  },
  {
    title: "Secure Coding for Enterprises",
    description:
      "Enterprise secure coding policy which is compliant with NIST SSDF and OWASP Secure Coding Practices, including a code review process with code scanners and AI, a security training program, and a security testing process.",
    images: [
      "https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
  },
  {
    title: "Hardened Linux Workspace for Enterprises",
    description:
      "Enterprise hardened Linux workspace for secure coding and development, including limiting access to public packages, role-based remote access control, and custom security configurations.",
    images: [
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "MoveIT Attack: Technical Analysis",
    description:
      "Technical analysis of the MoveIT attack, including a detailed breakdown of the attack and its impact.",
    images: [
      "https://images.unsplash.com/photo-1598624443973-2aa79a646a1e?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "/moveit",
    isOwned: true,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "Digital Currency Security",
    description:
      "Securing digital currency transactions and exchanges in compliance with PCI DSS, including offline payments, cold storage, and hardware wallets.",
    images: [
      "https://images.unsplash.com/photo-1669881336715-5a51a78d5434?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
  },
  {
    title: "Aircraft 3D Editor w/ Procurement",
    description:
      "Designing and procuring commercial aircraft, including supply chain management and production planning.",
    images: [
      "https://images.unsplash.com/photo-1724600820997-7d393baaea42?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
  },
  {
    title: "3D WebGL Auto Editor",
    description:
      "A 3D WebGL automotive editor for interior and external design with pricing and inventory management.",
    images: [
      "https://images.unsplash.com/photo-1648962402510-fc09fcb4cbb2?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "Insurance Coach Automation",
    description:
      "An insurance coach assistant for insurance agents and brokers, including a knowledge base, a personalized coaching program, and automation.",
    images: [
      "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "Chemical B2B Marketplace",
    description:
      "A chemical B2B marketplace for chemical suppliers and buyers, including inventory management and order processing.",
    images: [
      "https://images.unsplash.com/photo-1694230155228-cdde50083573?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "/chemondis",
    isOwned: false,
    isCompany: true,
    isFeatured: true,
  },
  {
    title: "Mixed Reality TV Show",
    description:
      "Lost In Time is a Norwegian game show that aired on TV Norge March 25th 2017. It combines interactive mixed reality technology with virtual production to transport contestants to different landscapes scattered across time and space and is all based on Epic's UNREAL Engine 4 game Engine.",
    images: [
      "https://images.unsplash.com/photo-1592477725143-2e57dc728f0a?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "/lit",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "Pharmaceutical Track & Trace",
    description:
      "The Pharmaceutical Track and Trace System, which was created in order to prevent fraud in pharmaceuticals, maintain patient security and monitor pharmaceuticals at every stage, has been implemented in our country in this scope for the first time in the world.",
    images: [
      "https://images.unsplash.com/photo-1580281657529-557a6abb6387?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "/its",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
  },
  {
    title: "KYK.NET",
    description:
      "Through this application, you can perform many transactions electronically, such as dormitory applications, scholarship applications, and dormitory registration fee payments.",
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "",
    isOwned: false,
    isCompany: true,
    isFeatured: false,
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
