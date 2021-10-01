import FooterLink from './FooterLink';
import { SocialMediaLinks } from './SocialMediaLinks';

export default function Footer() {
  return (
    <div className="bg-footer-texture text-white  bg-uuxblack-950">
      <div className="wrapper">
        <div className="py-20 md:py-28">
          <div className="text-bold text-lg md:text-xl md:mb-3">
            Kontakt aufnehmen
          </div>
          <div className="mb-11">
            <FooterLink
              label={process.env.NEXT_PUBLIC_MAIL}
              path={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}
            />
          </div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
