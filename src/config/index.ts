import {
  mobile,
  backend,
  creator,
  web,
  github,
  internet,
  docker,
  git,
  nodejs,
  reactjs,
  redux,
  typescript,
  openai,
  graphql,
  jest,
  nestjs,
  nextjs,
  python,
  css,
  html,
  figma,
  mongodb,
  tailwind,
  newline_logo,
  argus_logo,
  newline,
  estating,
  uhp,
  apt,
  pokmi,
  apex_comfort
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
    name: "Python",
    icon: python,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Nest.js",
    icon: nestjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "openai",
    icon: openai,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
];

const experiences: experiencesType[] = [
  {
    title: "AI Full Stack Engineer",
    company_name: "/newline",
    icon: newline_logo,
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
    icon: argus_logo,
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

const workProjects: projectsType[] = [
  {
    name: "Large educational platform",
    description:
      `Creating and shipping complex Frontend/Backend features. Which helped to create new ways to interact with educational content, 
      added a social media aspect to the platform and motivated users to be more involved in the product ecosystem by using a gamification/rewards system.
      Creating and shipping LLM features. Which gave a new way to interrupt the content and to automate some business processes.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "green-text-gradient",
      },
    ],
    image: newline,
    project_link_logo: internet,
    source_code_link: "https://www.newline.co",
  },
  {
    name: "Real Estate website",
    description:
      `Frontend/Backend support. New UI components creation. 
      One of the highlits was a creation of the leaflet that is generated and being returned from the backend as a custom HTML page or a PDF file. 
      And depending on the user status, data can be returned and displayed with a different content. 
      On the fronted side, user can choose either to view HTML, download PDF or to share leaflet link.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "green-text-gradient",
      },
    ],
    image: estating,
    project_link_logo: internet,
    source_code_link: "https://estating.com",
  },
  {
    name: "Corporate website - UHP Europe",
    description:
      `Created a corporate multi-language website from scratch 
      with an adaptive layout, dynamic news page, maps, and feedback form.`,
    tags: [
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: uhp,
    project_link_logo: internet,
    source_code_link: "https://uhpeurope.com",
  },
  {
    name: "NFT trading platform",
    description:
      `Develop and implement new functionality/features for the NFT trading platform. 
      Main goal of a new feature was to gamify users spendings and increased user interactivity with the platform using XP points, ranking and reward system not only for general users but also for the potential crypto investors. 
      This approach helped to gain 2000 new unique users in 1 month and increased company revenue on $50k.`,
    tags: [
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "green-text-gradient",
      },
      {
        name: "graph ql",
        color: "green-text-gradient",
      },
    ],
    image: pokmi,
    project_link_logo: internet,
    source_code_link: "https://pokmi.com",
  },
  {
    name: "AI chatbot 'apt-chatapp'",
    description:
      `Project description. AI chatbot created from scratch using 
      OpenAI API (GPT-4), React.js, Node.js, Sass, MongoDB, Firebase, and MobX with 100 unique daily users.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "gpt-4",
        color: "orange-text-gradient",
      },
    ],
    image: apt,
    source_code_link: "",
  },
  {
    name: "Online store 'Apex Comfort'",
    description:
      `The online store was created for a dealer of heating and cooling devices and their components from leading manufacturers in Europe and Ukraine.
      Online store was build using such WordPress plugins as Contact Form 7, Google XML Sitemaps, MC4WP, Slider Revolution, WPBakery Page Builder and WPML CMS Nav.`,
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: apex_comfort,
    project_link_logo: internet,
    source_code_link: "https://apex-comfort.com",
  },
];

export { services, technologies, experiences, testimonials, workProjects };
