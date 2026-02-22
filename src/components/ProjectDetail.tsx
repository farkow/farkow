import { useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiCodeAlt,
  BiLayer,
  BiLinkExternal,
} from "react-icons/bi";
import * as m from "../paraglide/messages.js";

interface ProjectDetailProps {
  title: string;
  description: string;
  images?: string[];
  video?: string;
  tags: string[];
  contribution: string;
  techStack: string[];
  owned: boolean;
  featured: boolean;
  link?: string;
}

export default function ProjectDetail({
  title,
  description,
  images = [],
  video,
  tags,
  contribution,
  techStack,
  owned,
  featured,
  link,
}: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <div className="space-y-4 text-center md:text-left">
          {/* Badges */}
          <div className="flex gap-2">
            {featured && (
              <div className="flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
                {m.card_featured()}
              </div>
            )}
            {owned && (
              <div className="flex items-center gap-1 rounded-full bg-blue-500/90 px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                {m.card_own_project()}
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20 ring-inset"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="flex flex-col gap-12">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
              <img
                src={images[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="h-full w-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-slate-900/80"
                  >
                    <BiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-slate-900/80"
                  >
                    <BiChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "w-4 bg-emerald-500"
                            : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Video Player */}
          {video && (
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-black">
              <video
                src={video}
                controls
                className="h-full w-full"
                poster="/video-placeholder.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-12 border-b border-slate-800/50 pb-12 md:flex-row">
          {/* Contribution */}
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center gap-3 text-emerald-400">
              <BiLayer className="text-2xl" />
              <h2 className="text-xl font-bold tracking-wider uppercase">
                {m.detail_my_contribution()}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-300">
              {contribution}
            </p>

            {link && (
              <a
                href={link}
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/40 active:translate-y-0"
              >
                <span>{m.detail_visit_project()}</span>
                <BiLinkExternal className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center gap-3 text-emerald-400">
              <BiCodeAlt className="text-2xl" />
              <h2 className="text-xl font-bold tracking-wider uppercase">
                {m.detail_tech_stack()}
              </h2>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
