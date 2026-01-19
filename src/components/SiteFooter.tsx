import { Footer } from "flowbite-react";

export default function SiteFooter() {
  return (
    <Footer container className="border-t border-slate-800 bg-slate-950">
      <div className="w-full text-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <Footer.Brand href="#" name="Cyber Security PR" />
            <Footer.LinkGroup>
              <Footer.Link href="#entry">Entry</Footer.Link>
              <Footer.Link href="#experience">Experience</Footer.Link>
              <Footer.Link href="#skills">Skills</Footer.Link>
              <Footer.Link href="#certifications">Certifications</Footer.Link>
              <Footer.Link href="#contact">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright by="Your Name" year={2026} />
        </div>
      </div>
    </Footer>
  );
}
