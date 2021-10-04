import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export default function Header() {
  return (
    <div className="flex wrapper justify-between items-center pt-4 md:pt-0 md:h-52">
      <Logo />
      <Menu />
    </div>
  );
}
