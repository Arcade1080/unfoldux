import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Icons } from '../types';
import Icon from './Icon';

type SocialMediaLinkProps = {
  path: string;
  label: string;
  icon?: Icons;
};

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  path,
  label,
  icon,
}) => {
  return (
    <a
      className={`text-lg text-gray-100 md:text-xl block md:inline-block  relative font-bold`}
      href={path}
      target="_blank"
      title={label}
    >
      <span className="">
        <Icon color="text-white" name={icon} />
      </span>
    </a>
  );
};
