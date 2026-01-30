import { Button, Card } from "flowbite-react";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          Contact & Availability
        </h2>
        <p className="text-sm text-slate-300">
          Get in touch with me for any questions or to discuss your software,
          security and AI needs.
        </p>
      </div>

      <div className="flex flex-row gap-6">
        <Card className="basis-4/6 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">Contact</h3>
          <p className="text-sm text-slate-300">
            You can reach me at qyphruz@proton.me.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button color="blue" href="mailto:qyphruz@proton.me">
              Email
            </Button>
            <Button color="gray" outline href="#entry">
              Back to top
            </Button>
          </div>
        </Card>
        <Card className="basis-2/6 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">Availability</h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              Status:{" "}
              <span className="font-semibold text-green-500">Available</span>
            </p>
            <p>Location: Remote / Hybrid (Germany & Türkiye)</p>
            <p>Timezone: CET / GMT friendly</p>
            <p>Response time: 24-48 hours</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
