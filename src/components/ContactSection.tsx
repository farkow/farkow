import { Button, Card } from "flowbite-react";

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border-slate-800 bg-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-100">
          Let us build the story behind your security program
        </h2>
        <p className="text-sm text-slate-300">
          I work with leaders who need clarity, momentum, and communication that
          makes security a business advantage.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button color="blue" href="mailto:hello@security-lead.dev">
            Email
          </Button>
          <Button color="gray" outline href="#entry">
            Back to top
          </Button>
        </div>
      </Card>
      <Card className="border-slate-800 bg-slate-900/40">
        <h3 className="text-xl font-semibold text-slate-100">Availability</h3>
        <p className="text-sm text-slate-300">
          Advisory retainers, program launches, and executive workshops.
        </p>
        <div className="mt-4 space-y-2 text-sm text-slate-300">
          <p>Location: Remote / Hybrid</p>
          <p>Timezone: CET / GMT friendly</p>
          <p>Response time: 24-48 hours</p>
        </div>
      </Card>
    </section>
  );
}
