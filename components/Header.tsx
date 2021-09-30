import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export default function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <Menu />
    </div>
  );
}
