import { Badge, Card } from "flowbite-react";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-100">Experience</h2>
        <p className="text-sm text-slate-300">
          Famous companies I have worked for. Well-known customers I have
          experience with.
        </p>
      </div>

      <div className="flex flex-row gap-6">
        <Card className="basis-1/2 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            Work experience
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="schaeffler" color="gray" size="sm">
              Schaeffler
            </Badge>
            <Badge key="gd" color="gray" size="sm">
              Giesecke+Devrient
            </Badge>
            <Badge key="dassault" color="gray" size="sm">
              Dassault Systèmes
            </Badge>
            <Badge key="intel" color="gray" size="sm">
              Intel
            </Badge>
          </div>
        </Card>
        <Card className="basis-1/2 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            Customer experience
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="akparti" color="gray" size="sm">
              Ak Parti
            </Badge>
            <Badge key="airbus" color="gray" size="sm">
              Airbus
            </Badge>
            <Badge key="audi" color="gray" size="sm">
              Audi
            </Badge>
            <Badge key="bmw" color="gray" size="sm">
              BMW
            </Badge>
            <Badge key="ds" color="gray" size="sm">
              DS Automobiles
            </Badge>
            <Badge key="hdi" color="gray" size="sm">
              HDI
            </Badge>
            <Badge key="hyundai" color="gray" size="sm">
              Hyundai
            </Badge>
            <Badge key="lanxess" color="gray" size="sm">
              Lanxess
            </Badge>
            <Badge key="porsche" color="gray" size="sm">
              Porsche
            </Badge>
            <Badge key="tiga" color="gray" size="sm">
              Tiga Healthcare Technologies
            </Badge>
            <Badge key="turksat" color="gray" size="sm">
              Türksat
            </Badge>
            <Badge key="toyota" color="gray" size="sm">
              Toyota
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
