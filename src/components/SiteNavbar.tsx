import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import * as m from "../paraglide/messages.js";
import { getLocale, setLocale } from "../paraglide/runtime.js";

export default function SiteNavbar() {
  const currentLocale = getLocale();

  const toggleLocale = () => {
    setLocale(currentLocale === "en" ? "tr" : "en");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <Navbar fluid rounded className="mx-auto w-full max-w-6xl bg-transparent">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/img/maydin-circle.png"
            className="h-8 w-8 rounded-lg"
            alt="Murat Aydın"
          />
          <span className="text-lg font-semibold text-slate-100">
            MURAT AYDIN
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggleLocale}
            className="mr-2 cursor-pointer rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-bold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
            aria-label="Switch language"
          >
            {currentLocale === "en" ? "TR 🇹🇷" : "EN 🇬🇧"}
          </button>
          <Button as={Link} to="/projects" size="sm" color="green">
            {m.nav_projects()}
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/#entry">{m.nav_entry()}</NavbarLink>
          <NavbarLink href="/#experience">{m.nav_experience()}</NavbarLink>
          <NavbarLink href="/#skills">{m.nav_skills()}</NavbarLink>
          <NavbarLink href="/#certifications">
            {m.nav_certifications()}
          </NavbarLink>
          <NavbarLink href="/#contact">{m.nav_contact()}</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
