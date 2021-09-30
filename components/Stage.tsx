import React from 'react';
import Image from 'next/image';

export const Stage = () => {
  return (
    <div className="relative py-10  flex items-center  ">
      <div className="display-heading z-10 md:w-11/12 lg:w-10/12 md:pt-20">
        Hallo, <br /> ich bin Julian Scheele. <br /> <br /> Als UX/UI Designer,
        zertifizierter Product Owner und Frontend Entwickler treibe ich die
        menschzentrierte Entwicklung digitaler Produkte voran.
      </div>

      <div className="absolute z-0 hidden md:block  right-0 top-0">
        <Image src="/stage_visual.svg" width={429} height={605} priority />
      </div>
    </div>
  );
};
