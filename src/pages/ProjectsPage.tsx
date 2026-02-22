import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Checkbox } from "flowbite-react";
import SEO from "../components/SEO";
import * as m from "../paraglide/messages.js";

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

function getProjects(): Project[] {
  return [
    {
      title: m.project_itopsy_title(),
      description: m.project_itopsy_description(),
      images: ["/img/itopsy.png"],
      link: "/itopsy",
      isOwned: true,
      isCompany: false,
      isFeatured: true,
      priority: 50,
    },
    {
      title: m.project_its_title(),
      description: m.project_its_description(),
      images: ["/img/its.png"],
      link: "/its",
      isOwned: false,
      isCompany: true,
      isFeatured: true,
      priority: 49,
    },
    {
      title: m.project_digital_currency_title(),
      description: m.project_digital_currency_description(),
      images: ["/img/digital-currency.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: true,
      priority: 48,
    },
    {
      title: m.project_chemondis_title(),
      description: m.project_chemondis_description(),
      images: ["/img/chemondis.png"],
      link: "/chemondis",
      isOwned: false,
      isCompany: true,
      isFeatured: true,
      priority: 47,
    },
    {
      title: m.project_secure_coding_title(),
      description: m.project_secure_coding_description(),
      images: ["/img/secure-coding.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: true,
      priority: 46,
    },
    {
      title: m.project_hardened_linux_title(),
      description: m.project_hardened_linux_description(),
      images: ["/img/hardened-linux.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 45,
    },
    {
      title: m.project_insurance_title(),
      description: m.project_insurance_description(),
      images: ["/img/insurance-coach.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 44,
    },
    {
      title: m.project_kyknet_title(),
      description: m.project_kyknet_description(),
      images: ["/img/kyknet.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 43,
    },
    {
      title: m.project_aircraft_title(),
      description: m.project_aircraft_description(),
      images: ["/img/aircraft-editor.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 41,
    },
    {
      title: m.project_auto_editor_title(),
      description: m.project_auto_editor_description(),
      images: ["/img/auto-editor.png"],
      link: "",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 40,
    },
    {
      title: m.project_lit_title(),
      description: m.project_lit_description(),
      images: ["/img/lit.png"],
      link: "/lit",
      isOwned: false,
      isCompany: true,
      isFeatured: false,
      priority: 39,
    },
  ];
}

export default function ProjectsPage() {
  const [filterOwned, setFilterOwned] = useState(true);
  const [filterCompany, setFilterCompany] = useState(true);
  const [filterFeatured, setFilterFeatured] = useState(false);

  const PROJECTS = getProjects();

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
      <SEO
        title={m.nav_projects()}
        description={m.projects_subtitle()}
        keywords="Portfolio, Projects, Software Engineering, cybersecurity, AI solutions"
      />
      <div className="flex flex-col gap-4 text-center">
        <h1 className="h-18 bg-linear-to-r from-white to-slate-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          {m.projects_heading()}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          {m.projects_subtitle()}
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_owned"
                aria-label={m.projects_filter_owned()}
                checked={filterOwned}
                onChange={(e) => setFilterOwned(e.target.checked)}
              />
              <label
                htmlFor="filter_owned"
                className={`cursor-pointer text-sm transition-colors ${
                  filterOwned ? "text-slate-100" : "text-slate-500"
                }`}
              >
                {m.projects_filter_owned()}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_company"
                aria-label={m.projects_filter_company()}
                checked={filterCompany}
                onChange={(e) => setFilterCompany(e.target.checked)}
              />
              <label
                htmlFor="filter_company"
                className={`cursor-pointer text-sm transition-colors ${
                  filterCompany ? "text-slate-100" : "text-slate-500"
                }`}
              >
                {m.projects_filter_company()}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="filter_featured"
                aria-label={m.projects_filter_featured()}
                checked={filterFeatured}
                onChange={(e) => setFilterFeatured(e.target.checked)}
              />
              <label
                htmlFor="filter_featured"
                className={`cursor-pointer text-sm transition-colors ${
                  filterFeatured ? "text-slate-100" : "text-slate-500"
                }`}
              >
                {m.projects_filter_featured()}
              </label>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500">
            {m.projects_showing()}{" "}
            <span className="text-slate-300">{filteredProjects.length}</span>{" "}
            {m.projects_of()}{" "}
            <span className="text-slate-300">{PROJECTS.length}</span>{" "}
            {m.projects_count_label()}
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
          <p className="text-xl text-slate-500">{m.projects_no_match()}</p>
          <button
            onClick={() => {
              setFilterOwned(true);
              setFilterCompany(true);
              setFilterFeatured(false);
            }}
            className="font-semibold text-purple-500 hover:text-purple-400"
          >
            {m.projects_reset_filters()}
          </button>
        </div>
      )}
    </main>
  );
}
