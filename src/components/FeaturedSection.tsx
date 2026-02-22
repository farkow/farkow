import ProjectCard from "./ProjectCard";
import * as m from "../paraglide/messages.js";

export default function FeaturedSection() {
  const TOP3 = [
    {
      title: m.project_itopsy_title(),
      description: m.project_itopsy_description(),
      images: ["/img/itopsy.png"],
      link: "/itopsy",
      isOwned: true,
    },
    {
      title: m.project_digital_currency_title(),
      description: m.project_digital_currency_description(),
      images: ["/img/digital-currency.png"],
      link: "",
    },
    {
      title: m.project_its_title(),
      description: m.project_pharma_featured_description(),
      images: ["/img/its.png"],
      link: "/its",
    },
  ];

  return (
    <section id="featured" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          {m.featured_heading()}
        </h2>
        <p className="text-sm text-slate-300">{m.featured_subtitle()}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TOP3.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
