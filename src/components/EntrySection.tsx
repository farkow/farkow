import { Button } from "flowbite-react";

export default function EntrySection() {
  return (
    <section id="entry">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="shrink-0">
          <img
            src="/img/maydin-circle.png"
            alt="Murat Aydin"
            className="h-32 w-32 rounded-full border-4 border-slate-800 object-cover shadow-xl md:h-48 md:w-48"
          />
        </div>
        <div className="mb-6 space-y-1 pt-6">
          <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
            Senior Software & Security Leader
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-slate-300 md:text-5xl">
            MURAT AYDIN
          </h1>
          <h2 className="text-xl leading-tight font-semibold md:text-3xl">
            Secure by Design, Cloud-Native, AI-Enhanced
          </h2>
          <h3 className="text-lg font-semibold text-emerald-400 md:text-xl">
            17 Years of Software & Cyber Security Experience
          </h3>
        </div>
      </div>
      <div className="mt-4 space-y-6">
        <p className="text-base text-slate-300 md:text-lg">
          I’m a seasoned technology leader with 17 years of experience
          engineering secure, scalable software systems across cloud
          environments. My work sits at the powerful intersection of application
          security, cloud-native architecture, and applied artificial
          intelligence—not just as theoretical concepts, but as practical,
          production-grade solutions.
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
          Whether hardening cloud deployments against emerging threats or
          enabling intelligent capabilities in disconnected environments, I
          build systems that are not only innovative but also trustworthy,
          maintainable, and built to last.
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
      </div>
    </section>
  );
}
