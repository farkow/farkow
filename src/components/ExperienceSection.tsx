import { Badge, Card } from "flowbite-react";

type ExperienceSectionProps = {
  companies: string[];
};

export default function ExperienceSection({ companies }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">Work experience</h2>
        <p className="text-sm text-slate-300">
          Company names only, tailored for fast review.
        </p>
      </div>
      <Card className="border-slate-800 bg-slate-900/40">
        <div className="flex flex-wrap gap-3">
          {companies.map((company) => (
            <Badge key={company} color="gray" size="sm">
              {company}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
