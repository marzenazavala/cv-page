import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marzena Bortnowska-Zavala React Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Marzena Zavala',
  subtitle: 'I am React Developer. Everyday I learn something new and I love it...',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me-img.jpg',
  paragraphOne:
    'Self-motivated Front End Web Developer with over 1 year of experience working on multiple projects. Passionate and hardworking with penchant for meeting deadlines.',
  paragraphTwo:
    "Proven experience developing consumer-focused web sites using React and Redux. Experience building products for desktop responding to challenges by designing and developing solutions and building web applications aligned to customer's services.",
  paragraphThree:
    'Interested in role with company promoting best practices and offering diverse customer projects.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'FiestaTime App',
    info: 'Experience sharing application to earn money by organizing online events',
    info2: 'Tech stack: React, Redux, Firebase, Material-UI, Stripe',
    repo: 'https://github.com/marzenazavala/experienceApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Crown Store',
    info: 'Clothes e-commerce store',
    info2: 'Tech stack: React, Redux, Firebase, Stripe payment and Styled-components',
    repo: 'https://github.com/marzenazavala/e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'TrustTech App',
    info: 'Experience sharing application to earn money by organizing online events',
    info2: 'Tech stack: React, Redux, Sass',
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Health+ App',
    info: 'Application to share information about health',
    info2: 'Tech stack: React, Redux, Sass',
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Project Arado',
    info: "Project Arado. Lost Hitler's Laboratory - static page for tourist atraction",
    info2: 'Tech stack: React, Firebase, Material-UI, Deployment: amplify',
    url: 'https://master.d1m3j09uktmxy.amplifyapp.com/',
    repo: 'https://github.com/marzenazavala/arado-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'The Venue',
    info: 'Musical Event Landing Page',
    info2: 'Tech stack: static page created with React and CSS',
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
