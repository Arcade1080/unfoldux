import { AnchorLink } from './AnchorLink';

export default function Footer() {
  return (
    <div className="bg-footer-texture bg-uuxblack-950">
      <div className="wrapper">
        <div className="py-36">
          <div className="">Kontakt aufnehmen</div>

          <AnchorLink
            isExternal
            label={process.env.NEXT_PUBLIC_MAIL}
            path={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}
          />
        </div>
      </div>
    </div>
  );
}
