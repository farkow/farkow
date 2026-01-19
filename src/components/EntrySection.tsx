import { Button, Card } from "flowbite-react";

export default function EntrySection() {
  return (
    <section id="entry" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Cyber Security & Program Concept Lead
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Strategic cyber programs that protect, transform, and inspire trust.
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          I design security programs and communication-ready narratives that
          help leaders make confident decisions. From zero trust to incident
          readiness, I deliver clear milestones, stakeholder alignment, and
          measurable impact.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button color="blue" href="#contact">
            Start a conversation
          </Button>
          <Button color="gray" outline href="#skills">
            View skills
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Program Governance
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Cyber Communications
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Executive Stakeholders
          </span>
        </div>
      </div>
      <Card className="border-slate-800 bg-slate-900/60 shadow-glow">
        <h2 className="text-xl font-semibold text-slate-100">
          Program snapshot
        </h2>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="flex items-center justify-between">
            <span>Risk posture</span>
            <span className="font-semibold text-emerald-300">Stabilized</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery cadence</span>
            <span className="font-semibold text-blue-300">Bi-weekly</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Leadership reporting</span>
            <span className="font-semibold text-slate-200">Board-ready</span>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 text-xs uppercase tracking-[0.2em] text-slate-400">
            Cyber PR: Make security results legible and shareable.
          </div>
        </div>
      </Card>
    </section>
  );
}
