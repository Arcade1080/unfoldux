import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type MenuItemProps = {
  path: string;
  label: string;
  isActive: boolean;
};

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  path,
  label,
  isActive,
}) => {
  return (
    <Link href={path}>
      <a className={`${isActive ? 'text-red-400' : 'text-yellow-400'}`}>
        {label}
      </a>
    </Link>
  );
};
