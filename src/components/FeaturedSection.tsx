import ProjectCard from "./ProjectCard";

const TOP3 = [
  {
    title: "Itopsy: AI-powered, no-code pentesting",
    description:
      "An AI-powered, node-based, visual penetration testing platform.",
    images: ["/img/itopsy.png"],
    link: "/itopsy",
    isOwned: true,
  },
  {
    title: "Digital Currency Security",
    description:
      "Securing digital currency transactions and exchanges in compliance with PCI DSS, including offline payments, cold storage, and hardware wallets.",
    images: ["/img/digital-currency.png"],
    link: "",
  },
  {
    title: "Pharmaceutical Track & Trace",
    description:
      "It is created in order to prevent fraud in pharmaceuticals, maintain patient security and monitor pharmaceuticals at every stage. It has been implemented in this scope for the first time in the world.",
    images: ["/img/its.png"],
    link: "/its",
  },
];

export default function FeaturedSection() {
  return (
    <section id="featured" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          Top 3 Featured Projects
        </h2>
        <p className="text-sm text-slate-300">
          Here are the top 3 featured projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TOP3.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
