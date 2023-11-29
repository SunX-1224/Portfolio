import {
  mobile,
  game,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  unity,
  cpp,
  mongodb,
  git,
  margintop,
  threejs,
  physx2d,
  portfolio,
  endless,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile & Desktop Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: game,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Unity",
    icon: unity
  },
  {
    name: "C++",
    icon: cpp
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Margin-Top Solutions",
    icon: margintop,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js w/ Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "FourSeven Games",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Designing and Developing game assets (models, sprites, animations, etc) for 2D and 3D games.",
      "Developing 2D and 3D games of different genre.",
      "Building games for Android, IOS and Desktop devices.",
      "Launching the games on Google PlayStore.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but XXXX proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like XXXX does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After XXXX optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EndLess",
    description: "An Endless flight game with procedurally generated dynamic levels with thrilling gameplay.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c-sharp",
        color: "green-text-gradient",
      },
    ],
    image: endless,
    source_code_link: "https://github.com/SunX-1224/Endless",
    view_link: 'https://play.google.com/store/apps/details?id=com.FourSevenGames.Endless&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  },
  {
    name: "Window2Me",
    description:
      "This is the site you are currently looking at right now. This showcases my works interactively and interestingly in some way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/SunX-1224/Portfolio",
  },
  {
    name: "Physx-2D",
    description:
      "A 2D game engine library with different components for developing desktop games and simulations.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "opengl",
        color: "green-text-gradient",
      },
      {
        name: "glfw",
        color: "pink-text-gradient",
      },
    ],
    image: physx2d,
    source_code_link: "https://github.com/SunX-1224/Physx-2D",
  },
];

export { services, technologies, experiences, testimonials, projects };