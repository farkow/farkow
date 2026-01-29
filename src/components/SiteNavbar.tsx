import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Navbar fluid rounded className="mx-auto w-full max-w-6xl bg-transparent">
        <NavbarBrand href="/">
          <span className="text-lg font-semibold text-slate-100">
            MURAT AYDIN
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button href="/projects" size="sm">
            Projects
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#entry">Entry</NavbarLink>
          <NavbarLink href="#experience">Experience</NavbarLink>
          <NavbarLink href="#skills">Skills</NavbarLink>
          <NavbarLink href="#certifications">Certifications</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
