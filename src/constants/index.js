import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  useless,
  geertmartens,
  deecomboekhouder,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const services = [
  {
    title: "Our Services",
    icon: web,
  },
  {
    title: "Step 1",
    icon: mobile,
  },
  {
    title: "Step 2",
    icon: backend,
  },
  {
    title: "Step 3",
    icon: creator,
  },
  {
    title: "Step 4",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Meet and Greet",
    company_name: "Lets have a cup of coffee",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Step 1",
    points: [
      "Lets get a feel for each other and get to know each other",
      "This is where we discuss what your dream website will look like.",
      "Here we make sure we are on the same page as your dreams",
      "from here we can move on to step 2",
    ],
  },
  {
    title: "Doing your mom",
    company_name: "Step 2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dummy text",
    points: [
      "Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text ",
      "Dummy text Dummy text",
    ],
  },
  {
    title: "Dummy text ",
    company_name: "Dummy text ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Step 3",
    points: ["Dummy text ", "Dummy text ", "Dummy text ", "Dummy text "],
  },
];
// to get rid of tha balls you can comment all the names and icons except the const
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Useless Studio",
    description:
      "We believe that the key to designing a successful experience is to focus on the essentials and strip away anything unnecessary ",
    tags: [
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: useless,
    source_code_link: "https://www.weuseless.com/index.html",
  },
  {
    name: "Geert Martens",
    description:
      "The family business Geert Martens is a recycling company specializing in the collection and recycling of ferrous metals and non-ferrous metals.",
    tags: [
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: geertmartens,
    source_code_link: "https://www.gm-metals.be",
  },
  {
    name: "De Ecomboekhouder",
    description:
      "The best accountant in the field of e-commerce in the Netherlands. We take care of all administrative tasks for any type of business.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: deecomboekhouder,
    source_code_link: "https://ecomboekhouder.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
