import {
  mobile,
  backend,
  creator,
  web,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  openai,
  newline,
  argus,
  carrent,
  jobit,
  tripguide,
  github,
} from "../../public/media";

interface experiencesType {
  title: string,
  company_name: string,
  icon: any,
  iconBg: string,
  date: string,
  points: string[]
}

interface projectsType {
  name: string
  description: string
  tags: any[]
  image: any
  project_link_logo?: any
  source_code_link: string
}

interface testimonialsType {
    testimonial: string
    name: string
    designation: string
    company: string
    image: string
}

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "openai",
    icon: openai,
  },
];

const experiences: experiencesType[] = [
  {
    title: "AI Full Stack Engineer",
    company_name: "/newline",
    icon: newline,
    iconBg: "#E6DEDD",
    date: "Oct. 2023 - Present",
    points: [
      "Doubled speed of candidate search and HR screening, by automating workflow of existing major processes with an AI. Including data scraping, data analysis and results sorting.",
      "Used web-scraping techniques to provide LLM internet access, enabling automated SEO content optimization. This involved extracting and analyzing web data to enhance search engine visibility and improve online presence.",
      "Developed and deployed a custom AI chatbot to chat with the educational courses data, using Next.js, FastAPI, LangChain, RAG and Chroma vector database. resulting in a 10% increase of customer satisfaction rate.",
      "Building new web-pages and UI components using Next.js, Styled components, Tailwind CSS, Redux, etc.",
    ],
  },
  {
    title: "Middle Full Stack JS Developer",
    company_name: "Argus Soft",
    icon: argus,
    iconBg: "#383E56",
    date: "Now. 2022 - Oct. 2023",
    points: [
      "Developing high-quality full-stack applications from scratch and maintaining existing ones for EU and US clients.",
      "Created AI web-chatbot from scratch using React.js, Sass, MongoDB, Firebase, FastAPI, LangChain and OpenAI API (GPT-4) with 100 unique daily users.",
      "Developed a new front- and backend functionality for a NFT trading platform to gamify users spending process. Which helped to gain 2000 new unique users in 3 month and increased company revenue by $50k.",
      "Created a corporate multi-language website from scratch with an adaptive layout, dynamic news page, maps, and feedback form.",
    ],
  },
  {
    title: "Full Stack JS Developer (React.js, Node.js)",
    company_name: `PE "Skyba P.V."`,
    icon: "",
    iconBg: "#383E56",
    date: "Aug. 2020 - Now. 2022",
    points: [
      "Software development for medium and small businesses.",
      "Frontend architecture support/development using JS, React.js, HTML, SCSS.",
      "Backend architecture support/development using Node.js, Express.js, REST API.",
      "Software troubleshoot and debug.",
      "Consulted in the redesign of a client’s website, resulting in a 20% increase in traffic.",
    ],
  },
];

const testimonials: testimonialsType[] = [
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

const projects: projectsType[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    project_link_logo: github,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
