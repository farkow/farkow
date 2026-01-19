import { Badge, Card } from "flowbite-react";

type SkillsSectionProps = {
  programmingSkills: string[];
  offensiveTools: string[];
};

export default function SkillsSection({
  programmingSkills,
  offensiveTools
}: SkillsSectionProps) {
  return (
    <section id="skills" className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <Card className="border-slate-800 bg-slate-900/40">
        <h3 className="text-xl font-semibold text-slate-100">
          Programming languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {programmingSkills.map((skill) => (
            <Badge key={skill} color="info" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
      <Card className="border-slate-800 bg-slate-900/40">
        <h3 className="text-xl font-semibold text-slate-100">
          Offensive security tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {offensiveTools.map((tool) => (
            <Badge key={tool} color="purple" size="sm">
              {tool}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
