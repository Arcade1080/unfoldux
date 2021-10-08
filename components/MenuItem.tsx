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
        className={`text-xl py-2 px-3 mx-1 md:ml-8 text-uuxblack-700 hover:text-uuxblack-900 hover:bg-gray-100 rounded-lg ${
          isActive
            ? 'font-bold text-uuxblack-900 bg-gray-100 rounded-lg'
            : 'font-normal'
        }`}
      >
        {label}
      </a>
    </Link>
  );
};
