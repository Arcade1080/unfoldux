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
      <a
        className={`text-xl p-2 mx-1 md:ml-8 text-uuxblack-700 hover:text-uuxblack-900 ${
          isActive ? 'font-bold' : 'font-normal'
        }`}
      >
        {label}
      </a>
    </Link>
  );
};
