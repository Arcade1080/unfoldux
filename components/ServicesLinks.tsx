import React from 'react';
import { SERVICES_LINKS } from '../config';
import { AnchorLink } from './AnchorLink';

export const ServicesLinks = () => {
  return (
    <>
      <ul>
        {SERVICES_LINKS.map(({ ...linkProps }, key) => {
          return (
            <li key={key} className="mb-2">
              <AnchorLink {...linkProps} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
