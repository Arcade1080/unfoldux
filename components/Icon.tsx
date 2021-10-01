import React from 'react';
import { Icons } from '../types';

type IconProps = {
  name: Icons;
  color?: string;
  size?: string;
} & typeof defaultProps;

const defaultProps = {
  color: 'text-gray-600',
  size: 'h-6 w-6',
};

// export default function Icon({ name, color }) {
const Icon = (props: IconProps) => {
  const iconClass = `${props.size} ${props.color}`;
  switch (props.name) {
    case Icons.arrowRight:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      );
  }
};

Icon.defaultProps = defaultProps;

export default Icon;
