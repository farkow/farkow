import { Navbar } from "flowbite-react";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Navbar fluid rounded className="mx-auto w-full max-w-6xl bg-transparent">
        <Navbar.Brand href="#">
          <span className="text-lg font-semibold text-slate-100">
            Cyber PR / Program Concepts
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#entry">Entry</Navbar.Link>
          <Navbar.Link href="#experience">Experience</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#certifications">Certifications</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
