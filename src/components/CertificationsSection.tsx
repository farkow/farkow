import { Badge, Card } from "flowbite-react";

type CertificationsSectionProps = {
  certifications: string[];
};

export default function CertificationsSection({
  certifications
}: CertificationsSectionProps) {
  return (
    <section id="certifications" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          Certifications
        </h2>
        <p className="text-sm text-slate-300">
          Credentialed for enterprise security leadership.
        </p>
      </div>
      <Card className="border-slate-800 bg-slate-900/40">
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <Badge key={cert} color="success" size="sm">
              {cert}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
