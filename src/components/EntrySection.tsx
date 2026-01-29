import { Button } from "flowbite-react";

export default function EntrySection() {
  return (
    <section id="entry" className="space-y-6">
      <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
        Senior Software & Security Leader
      </p>
      <h1 className="text-3xl leading-tight font-semibold md:text-5xl">
        Secure by Design, Cloud-Native, AI-Enhanced
      </h1>
      <h2 className="text-xl font-semibold text-emerald-400 md:text-3xl">
        15+ Years of Full-Stack Expertise
      </h2>
      <p className="text-base text-slate-300 md:text-lg">
        I’m a seasoned technology leader with 17+ years of experience
        engineering secure, scalable software systems across cloud environments.
        My work sits at the powerful intersection of application security,
        cloud-native architecture, and applied artificial intelligence—not just
        as theoretical concepts, but as practical, production-grade solutions.
      </p>
      <p className="text-base text-slate-300 md:text-lg">
        Beyond integrating AI into modern applications, I specialize in
        designing and deploying fully offline AI infrastructure: private,
        air-gapped, or low-connectivity AI systems that prioritize data
        sovereignty, regulatory compliance, and operational resilience. This
        includes end-to-end setups—from selecting optimized hardware and
        open-source models to configuring secure inference pipelines and
        monitoring frameworks—all without reliance on external cloud APIs.
      </p>
      <p className="text-base text-slate-300 md:text-lg">
        Whether hardening cloud deployments against emerging threats or enabling
        intelligent capabilities in disconnected environments, I build systems
        that are not only innovative but also trustworthy, maintainable, and
        built to last.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button color="blue" href="#contact">
          Start a conversation
        </Button>
        <Button color="green" href="#skills">
          View skills
        </Button>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-slate-400">
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Application Security
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Software Development
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1">
          On-Premise AI Solutions
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Cloud-Native
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Enterprise Solutions
        </span>
      </div>
    </section>
  );
}
