import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  light?: boolean;
};

export const Logo: FunctionComponent<LogoProps> = ({ light }) => {
  const logoPath = light ? '/unfoldux_logo_light.svg' : '/unfoldux_logo.svg';

  return (
    <Link href="/">
      <div className="cursor-pointer flex items-center">
        <Image
          src={logoPath}
          alt="Unfold UX - UX/UI Design"
          width={132}
          height={38}
        />
      </div>
    </Link>
  );
};
