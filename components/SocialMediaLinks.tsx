import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../config';
import { SocialMediaLink } from './SocialMediaLink';

export const SocialMediaLinks = () => {
  return (
    <div className="flex justify-start">
      {SOCIAL_MEDIA_LINKS.map(({ ...linkProps }) => {
        return (
          <div className="mr-4">
            <SocialMediaLink {...linkProps} />
          </div>
        );
      })}
    </div>
  );
};
