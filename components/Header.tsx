import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export default function Header() {
  return (
    <div className="flex wrapperPadding   justify-between items-center md:h-52">
      <Logo />
      <Menu />
    </div>
  );
}
