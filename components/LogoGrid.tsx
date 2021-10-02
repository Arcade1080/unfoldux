import Image from 'next/image';
import { CERTIFICATION_LINKS } from '../config';

export function LogoGrid() {
  return (
    <div className="flex flex-col justify-center  sm:flex-row sm:justify-start  gap-6">
      {CERTIFICATION_LINKS.map(({ target, logo, label }, key) => {
        return (
          <div key={key} className="text-center">
            <a title={label} href={target} target="_blank">
              <Image src={logo} width={225} height={178} priority />
            </a>
          </div>
        );
      })}
    </div>
  );
}
