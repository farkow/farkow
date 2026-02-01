import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  link: string;
  isFeatured?: boolean;
  isOwned?: boolean;
}

export default function ProjectCard({
  title,
  description,
  images,
  link,
  isFeatured,
  isOwned,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Image Carousel */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${title} screenshot ${currentImageIndex + 1}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
          {isFeatured && (
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg shadow-emerald-500/20 backdrop-blur-sm">
              FEATURED
            </div>
          )}
          {isOwned && (
            <div className="flex items-center gap-1 rounded-full bg-blue-500/90 px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm">
              OWN PROJECT
            </div>
          )}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-slate-900/80"
              aria-label="Previous image"
            >
              <BiChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-slate-900/80"
              aria-label="Next image"
            >
              <BiChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-4 bg-purple-500"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 text-left">
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        {link && (
          <a
            href={link}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-950 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-800 active:scale-95"
          >
            View Details
          </a>
        )}
        {!link && (
          <a
            href="/#contact"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95"
          >
            Contact for details
          </a>
        )}
      </div>
    </div>
  );
}
