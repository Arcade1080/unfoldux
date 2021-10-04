import Icon from "./components/Icon";
import { Icons } from "./types";


export const CONTACT_EMAIL = "hi@unfoldux.de";

export const MENU_ITEMS = [
  {
    label: 'Services',
    path: '/services',
  },
  {
    label: 'Info',
    path: '/info',
  },
];

export const SERVICES_LINKS = [
  {
    label: 'UX / UI Design und Strategie',
    path: '/services#uxdesign',
  },
  {
    label: 'Agiles Projektmanagement und Product Ownership',
    path: '/services#agile',
  },
  {
    label: 'UX Engineering und Frontend Entwicklung',
    path: '/services#uxe',
  },
  {
    label: 'Conversion Optimierung und A/B Testing',
    path: '/services#cro',
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    label: 'linkedIn',
    icon: Icons.linkedIn,
    path: 'https://www.linkedin.com/in/julian-scheele-53291b95/',
  },
  {
    label: 'Github',
    icon: Icons.github,
    path: 'https://github.com/Arcade1080/unfoldux',
  },
  {
    label: 'Twitter',
    icon: Icons.twitter,
    path: 'https://twitter.com/Arcade20000',
  },
  {
    label: 'Spotify',
    icon: Icons.spotify,
    path: 'https://open.spotify.com/playlist/3mLwNIbr9MEIRRz4ZhetQq?si=2de7436e682b4342',
  },
];


export const CERTIFICATION_LINKS = [
  {
    target: "https://www.certible.com/de/verify/029641b1eeaf806458fab0d52f81c248",
    logo: "/uxqb_cert.png",
    label: "UXQB Certified Professional for User Experience"
  },
  {
    target: "https://www.scrum.org/certificates/650555",
    logo: "/pspo_cert.png",
    label: "Professional Scrum Product Owner I"
  },
  {
    target: "https://www.germanupa.de/experten/julian-scheele",
    logo: "/upa_cert.png",
    label: "German UPA Member"
  },
]