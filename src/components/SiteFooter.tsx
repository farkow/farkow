import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";

export default function SiteFooter() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="MURAT AYDIN" />
            <FooterLinkGroup col>
              <FooterLink href="/#entry">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="OWNED LARGE PROJECTS" />
            <FooterLinkGroup col>
              <FooterLink href="/itopsy">Itopsy</FooterLink>
              <FooterLink href="/prograi">Prograi</FooterLink>
              <FooterLink href="/duvardelen">DuvarDelen</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="OWNED INVESTIGATION TOOLS" />
            <FooterLinkGroup col>
              <FooterLink href="/torunet">Torunet</FooterLink>
              <FooterLink href="/netcabal">Netcabal</FooterLink>
              <FooterLink href="/nar">Nar</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="OWNED OTHER TOOLS" />
            <FooterLinkGroup col>
              <FooterLink href="/sonaire">Sonaire</FooterLink>
              <FooterLink href="/carcuva">Carcuva</FooterLink>
              <FooterLink href="/harmokid">HarmoKid</FooterLink>
              <FooterLink href="/magdan">Magdan</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-6 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Murat Aydın" year={2026} />
          <div className="mx-4 mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://linkedin.com/in/farkow"
              icon={BiLogoLinkedin}
            />
            <FooterIcon href="https://github.com/farkow" icon={BiLogoGithub} />
            <FooterIcon
              href="https://telegram.me/qyphruz"
              icon={BiLogoTelegram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
