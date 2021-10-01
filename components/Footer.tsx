import React from 'react';
import FooterLink from './FooterLink';
import { Logo } from './Logo';
import Link from 'next/link';
import { SocialMediaLinks } from './SocialMediaLinks';

export default function Footer() {
  return (
    <>
      <div className="bg-footer-texture text-white  bg-uuxblack-950">
        <div className="wrapper">
          <div className="pt-20 pb-10 md:pt-28 md:pb-20 flex flex-col sm:flex-row  justify-between">
            <div className="mb-12">
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
            <Logo light />
          </div>
        </div>
      </div>
      <div className="bg-uuxblack-600">
        <div className="wrapper">
          <div className="py-4 text-white flex gap-3 text-sm">
            <div> &copy; 2021 unfoldux.de </div>
            <div>
              <Link href="/datenschutz">
                <a className="hover:underline">Datenschutz</a>
              </Link>
            </div>
            <div>
              <Link href="/impressum">
                <a className="hover:underline">Impressum</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
