import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Zion's Coders LTD", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Marzena Zavala',
  subtitle: 'JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Crown Store',
    info:
      'Clothes e-commerce created with redux-saga, rirebase, stripe payment and styled-components',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Project Arado',
    info: "Project Arado - Lost Hitler's Laboratory",
    info2: 'Static page for tourist atraction with gatsby blog and strapi',
    url: 'https://master.d1m3j09uktmxy.amplifyapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'The Venue',
    info: 'Musical Event Landing Page',
    info2: 'Static page created with React',
    url: 'http://cold-air.surge.sh/',
    repo: 'https://github.com/marzenazavala/thevenue', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'marzenazavala@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'hhttps://www.facebook.com/marzena.bortnowska2/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marzena-bortnowska-zavala-dev/?locale=en_US',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/marzenazavala',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
