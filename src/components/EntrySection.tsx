import { Button } from "flowbite-react";
import * as m from "../paraglide/messages.js";

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
            {m.entry_subtitle()}
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-slate-300 md:text-5xl">
            {m.entry_name()}
          </h1>
          <h2 className="text-xl leading-tight font-semibold md:text-3xl">
            {m.entry_tagline()}
          </h2>
          <h3 className="text-lg font-semibold text-emerald-400 md:text-xl">
            {m.entry_years()}
          </h3>
        </div>
      </div>
      <div className="mt-4 space-y-6">
        <p className="text-base text-slate-300 md:text-lg">{m.entry_bio1()}</p>
        <p className="text-base text-slate-300 md:text-lg">{m.entry_bio2()}</p>
        <p className="text-base text-slate-300 md:text-lg">{m.entry_bio3()}</p>
        <div className="flex flex-wrap gap-4">
          <Button color="blue" href="#contact">
            {m.entry_cta_conversation()}
          </Button>
          <Button color="green" href="#skills">
            {m.entry_cta_skills()}
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-slate-700 px-3 py-1">
            {m.entry_tag_appsec()}
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            {m.entry_tag_dev()}
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            {m.entry_tag_ai()}
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            {m.entry_tag_cloud()}
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            {m.entry_tag_enterprise()}
          </span>
        </div>
      </div>
    </section>
  );
}
