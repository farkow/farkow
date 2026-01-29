import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BiLogoDribbble,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";

export default function SiteFooter() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="MURAT AYDIN" />
            <FooterLinkGroup col>
              <FooterLink href="/">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/recruit">Recruitment</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="LARGE PROJECTS" />
            <FooterLinkGroup col>
              <FooterLink href="#">Itopsy</FooterLink>
              <FooterLink href="#">Prograi</FooterLink>
              <FooterLink href="#">DuvarDelen</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="INVESTIGATION TOOLS" />
            <FooterLinkGroup col>
              <FooterLink href="#">Torunet</FooterLink>
              <FooterLink href="#">Netcabal</FooterLink>
              <FooterLink href="#">Nar</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="OTHER TOOLS" />
            <FooterLinkGroup col>
              <FooterLink href="#">Sonaire</FooterLink>
              <FooterLink href="#">Carcuva</FooterLink>
              <FooterLink href="#">HarmoKid</FooterLink>
              <FooterLink href="#">Magdan</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-6 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Murat Aydın" year={2026} />
          <div className="mx-4 mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BiLogoLinkedin} />
            <FooterIcon href="#" icon={BiLogoGithub} />
            <FooterIcon href="#" icon={BiLogoTwitter} />
            <FooterIcon href="#" icon={BiLogoTelegram} />
            <FooterIcon href="#" icon={BiLogoDribbble} />
            <FooterIcon href="#" icon={BiLogoFacebook} />
            <FooterIcon href="#" icon={BiLogoInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
