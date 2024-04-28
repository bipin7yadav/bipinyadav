import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';
import Profile from "../../public/Profile.jpg"

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  // facebook: 'https://www.facebook.com/profile.php?id=100025211493753',
  instagram: 'https://www.instagram.com/iambipinyadav7/',
  twitter: 'https://twitter.com/bipinyadav9769',
  github: 'https://github.com/bipin7yadav',
  linkedin: 'https://www.linkedin.com/in/bipin-yadav-07a08217a/',
};

export const author = {
  name: 'Bipin Yadav',
  email: 'bipinyadav9769@gmail.com',
};

export const seoData = {
  title: 'Bipin | Web App Developer',
  description:
    'Bipin Yadav is a frontend developer who specializes in building  exceptional visual interfaces.',
  author: author.name,
  image:
    'https://media.licdn.com/dms/image/C4E03AQEtIyarRZYvXg/profile-displayphoto-shrink_400_400/0/1611285912209?e=1707955200&v=beta&t=ZMqlUn8fkLVtp2GUhoPxfyB5byr1qISR7xe8_nVHpLk',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Bipin',
    'Bipin Yadav',
    '@bipinyadav9769',
    'bipinyadav9769',
    'Portfolio',
    'Bipin Portfolio ',
    'Bipin Yadav Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Bipin Yadav.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "I'm a passionate  web app developer having an experience of web applications with React.js & Next.js ",

  specialText: 'Currently available for remote job & freelance',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'React Js',
      'Express Js',
      'Javascript',
      'HTML CSS',
      'Redux Toolkit',
      'React Native'
    ],
  },
  img:"https://media.licdn.com/dms/image/C4E03AQEtIyarRZYvXg/profile-displayphoto-shrink_400_400/0/1611285912209?e=1720051200&v=beta&t=dD-9PRO4rJQouHlF2UIMOfOAxboSWjlcCMwd-lsVzxc",
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Web App development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        'Learning React Native',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        // {
        //   name: 'typeScript',
        //   icon: 'vscode-icons:file-type-typescript-official',
        // },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        // { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        // { name: 'database', icon: 'vscode-icons:file-type-sql' },
        // { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    }

  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Invizio Solutions',
      companyUrl: 'https://inviziosolutions.com/',
      role: 'frontend developer',
      started: 'July 2022',
      upto: 'present',
      tasks: [
        'Built static frontend UI from the ground up using React js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Improved UI, fixed bugs, and developed client-requested features promptly.',
        'Developed a dynamic form feature, overcoming challenges in state handling and live validation.',
        'Optimized bulk image upload by implementing batch API calls and image compression, leading to a 3x increase in sales before a major exhibition.'


      ],
    },

  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Web Tour',
      url: 'https://web-tour-git-dev-bipin7yadav.vercel.app/',
      repo: 'https://github.com/bipin7yadav/web-tour',
      img: '/natour.png',
      year: 2023,
      tags: ['Reactjs', 'SASS'],
    },
    {
      id: getId(),
      name: 'Eccomerce Web App',
      url: 'https://hind-kart.vercel.app/',
      repo: 'https://github.com/bipin7yadav/HindKart',
      img: '/ecom.png',
      year: 2022,
      tags: ['Reactjs', "useContext"],
    },
    {
      id: getId(),
      name: 'Quizz App',
      url: 'https://zippy-platypus-fad4ac.netlify.app/',
      repo: "https://github.com/bipin7yadav/QuizzApp",
      img: '/quizApp.png',
      year: 2022,
      tags: ['Reactjs', 'useContext'],
    },
    {
      id: getId(),
      name: 'Video Library',
      url: 'https://video-library-git-windows-bipin7yadav.vercel.app/',
      repo: 'https://github.com/bipin7yadav/Video_Library',
      img: '/youtube.png',
      year: 2022,
      tags: ['React', 'Redux Toolkit'],
    },

    // {
    //   id: getId(),
    //   name: 'bankist marketing',
    //   url: 'https://vatsalsinghkv.github.io/bankist-marketing/',
    //   repo: 'https://github.com/vatsalsinghkv/bankist-marketing',
    //   img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },

  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    // {
    //   icon: 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: ' Built by Bipin Yadav',
  link: 'https://github.com/bipin7yadav/bipin7yadav-portFolioNextJs',
};
