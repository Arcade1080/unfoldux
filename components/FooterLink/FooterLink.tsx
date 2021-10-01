import React, { FunctionComponent } from 'react';
import { Icons } from '../../types';
import s from './FooterLink.module.css';
import cn from 'classnames';
import Icon from '../Icon';

type FooterLinkProps = {
  path: string;
  label: string;
};

const FooterLink: FunctionComponent<FooterLinkProps> = ({ path, label }) => {
  const iconName = Icons.arrowRight;
  return (
    <a className={cn(s.root)} href={`${path}`}>
      <span>{label}</span>
      <span className={cn(s.icon, '-rotate-45')}>
        <Icon color="text-white" name={iconName} />
      </span>
    </a>
  );
};

export default FooterLink;
