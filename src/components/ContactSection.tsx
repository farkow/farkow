import { Button, Card } from "flowbite-react";
import * as m from "../paraglide/messages.js";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          {m.contact_heading()}
        </h2>
        <p className="text-sm text-slate-300">{m.contact_subtitle()}</p>
      </div>

      <div className="flex flex-row gap-6">
        <Card className="basis-3/6 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.contact_title()}
          </h3>
          <p className="text-sm text-slate-300">{m.contact_reach()}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button color="blue" href="mailto:qyphruz@proton.me">
              {m.contact_email()}
            </Button>
            <Button color="gray" outline href="#entry">
              {m.contact_back_to_top()}
            </Button>
          </div>
        </Card>
        <Card className="basis-3/6 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.contact_availability()}
          </h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              {m.contact_status()}{" "}
              <span className="font-semibold text-green-500">
                {m.contact_available()}
              </span>
            </p>
            <p>{m.contact_location()}</p>
            <p>{m.contact_timezone()}</p>
            <p>{m.contact_response()}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
