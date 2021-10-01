import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Icons } from '../types';
import Icon from './Icon';

type AnchorLinkProps = {
  path: string;
  label: string;
  isExternal?: boolean;
};

export const AnchorLink: FunctionComponent<AnchorLinkProps> = ({
  path,
  label,
  isExternal,
}) => {
  const iconName = isExternal ? Icons.arrowRight : Icons.arrowRight;
  return (
    <Link href={path}>
      <a className={`text-xl inline-block anchor-link pr-8 relative font-bold`}>
        <span>{label}</span>
        <span className="absolute anchor-icn right-0 top-0">
          <Icon name={iconName} />{' '}
        </span>
      </a>
    </Link>
  );
};
