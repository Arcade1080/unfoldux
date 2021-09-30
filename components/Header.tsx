import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export default function Header() {
  return (
    <div className="flex wrapperPadding bg-red-600 justify-between items-center">
      <Logo />
      <Menu />
    </div>
  );
}
