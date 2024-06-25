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
    discordBlack,
    facebook,
    instagram,
    twitter,
    telegram,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Woldreamz Inc",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2019 - Feb 2020",
      points: [
        "Develop dynamic and interactive web applications using HTML, CSS, and JavaScript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Utilize frameworks like React.js or Angular.js to build scalable frontend components. Ka",
      ],
    },
    {
      title: "React Developer",
      company_name: "Woldreamz Inc",
      icon: tesla,
      iconBg: "#383E56",
      date: "March 2020 - Feb 2021",
      points: [
        "Build reusable and component-based user interfaces using React.js library.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrate frontend components with backend services via RESTful APIs or GraphQL.",
        "Conduct unit testing and participate in code reviews to ensure code quality and reliability.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Woldreamz Inc",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2021 - Jan 2023",
      points: [
        "Design and implement scalable frontend components using HTML, CSS, and JavaScript frameworks.",
        "Collaborate with designers, frontend developers, and DevOps engineers to deploy and maintain applications.",
        "Develop server-side components and APIs using Node.js, Express.js, or other backend technologies.",
        "Conduct performance optimization, unit testing, and code reviews to ensure code quality.",
      ],
    },
    {
      title: "Cross-platform Developer",
      company_name: "Woldreamz Inc",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Utilize frameworks like React Native, Ionic, or Flutter to share a single codebase across platforms.",
        "Ensure compatibility and consistent functionality across different devices and operating systems.",
        "Develop cross-platform applications targeting web, mobile, and desktop platforms.",
        "Implement platform-specific optimizations and features to enhance user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I harbored doubts about the chances of crafting a website as aesthetically pleasing as our product, yet Rainer effortlessly delivered.",
      name: "Precious Nkem-Ekeke",
      designation: "CFO",
      company: "Woldreamz Inc",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "In my experience, I've yet to encounter a web developer who demonstrates the level of dedication to their clients' success that Rainer does.",
      name: "Bassey Ikpeme",
      designation: "COO",
      company: "United Mateni",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Following Rainer's optimization of our website, we witnessed a remarkable 50% surge in our traffic. Our gratitude towards him knows no bounds!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NenyeFitGym",
      description:
        "Web-based platform that allows users to search, book, and manage gym sessions from various providers, providing a convenient and efficient solution for fitness and health needs.",  
      tags: [
        {
          name: "svelte",
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
      source_code_link: "https://github.com/Woldreamz/City-of-God",
    },
    {
      name: "House Hunter",
      description:
        "Web application that enables users to search for houses & properties listed, view estimated sale/rent ranges for listings, and locate available houses based on their current location.",      
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
      source_code_link: "https://github.com/Woldreamz/HouseHunter",
    },
    {
      name: "Draycore",
      description:
        "A comprehensive versatile web application for the sale of software services to the general public. it presents an accessible platform for software solutions catering to diverse user needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Woldreamz/3D-Wol-Web",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://discord.gg/X8wQgv68HD",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://x.com/Woldreamz",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/woldreamz/",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/reyonsa/",
    },
  ];
  