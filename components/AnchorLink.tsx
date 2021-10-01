import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Icons } from '../types';
import Icon from './Icon';

type AnchorLinkProps = {
  path: string;
  label: string;
  isExternal?: boolean;
  styles?: string;
};

export const AnchorLink: FunctionComponent<AnchorLinkProps> = ({
  path,
  label,
  isExternal,
  styles,
}) => {
  const iconName = isExternal ? Icons.arrowRight : Icons.arrowRight;
  return (
    <Link href={path}>
      <a
        className={`text-lg md:text-xl block md:inline-block anchor-link pr-8 relative font-bold ${styles}`}
      >
        <span>{label}</span>
        <span className="absolute anchor-icn right-0">
          <Icon name={iconName} />
        </span>
      </a>
    </Link>
  );
};
