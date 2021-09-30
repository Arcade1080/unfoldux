import React from 'react';
import { MENU_ITEMS } from '../config';
import { MenuItem } from './MenuItem';
import { useRouter } from 'next/router';

export const Menu = () => {
  const { pathname } = useRouter();
  return (
    <div className="">
      {MENU_ITEMS.map(({ path, label }) => {
        const isActive = path === pathname;
        return <MenuItem isActive={isActive} label={label} path={path} />;
      })}
    </div>
  );
};
