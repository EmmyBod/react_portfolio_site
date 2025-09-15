import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school, torbita,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat,chitchat1, chitchat2, notes, ds1, react1, dental, market,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: hf,
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "Skilled in custom React.js development with component-based architecture, state management, and API integration.",
    },
    {
      title: "Led the development of complex client stores and websites across multiple CMS platforms—Shopify, WordPress, and Webflow",
    },
    {
      title: "Set up automated CI/CD workflows for Shopify themes (via GitHub Actions), containerized WordPress environments using Docker, and deployed Webflow sites.",
    },
    {
      title: "Four-time recipient of the Torbita Institute Tech Scholarship (2019–2023) for excellence in eCommerce web development.",
    },
    {
      title: "Selected among the top 100 (out of 20k students) in the Google Cloud Training Program (2021), with a focus on hosting scalable WooCommerce and Shopify apps.",
    },
   
  ]
  
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
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
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
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    
  ];

const list = [
   {
      id: "React",
      title: "React",
    },
    {
      id: "WordPress",
      title: "WordPress",
    },
    {
      id: "Webflow",
      title: "Webflow",
    },
   
    {
      id: "Shopify",
      title: "Shopify",
    },
   
   
  ];

  export const javaProject = [
    {
      name: "F3 Formula",
      description:
        "Fitness-focused Webflow site built from Figma, featuring bold visuals, smooth interactions, and a clean, performance-optimized layout.",
      tags: [
        {
          name: "Finsweet attributes",
          color: "blue-text-gradient",
        },
        {
          name: "webflow CMS",
          color: "green-text-gradient",
        },
        {
          name: "fitness",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://www.f3formula.com/",
      source_code_link: "https://www.f3formula.com/",
    },
    {
      name: "Impact Accelerator",
      description:
        "Developed a modern, responsive website by converting a Figma design into Webflow. Implemented CMS Collections and Lottie animations to enhance UI/UX",
      tags: [
        {
          name: "Webflow Ecommerce",
          color: "blue-text-gradient",
        },
        {
          name: "Jetboost",
          color: "green-text-gradient",
        },
        {
          name: "Outseta",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://www.impactaccelerator.io/",
      source_code_link: "https://www.impactaccelerator.io/",
    },
    {
      name: "Xio Trade",
      description:
        "Built a sleek AI voice automation site in Webflow using a Figma design, featuring smooth animations and a layout that reflects the platform’s cutting-edge innovation.",
      tags: [
        {
          name: "Trade",
          color: "blue-text-gradient",
        },
        {
          name: "LottieFiles",
          color: "green-text-gradient",
        },
        {
          name: "Webflow build",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://www.xio.ai/",
      source_code_link: "https://www.xio.ai/",
    },
    {
      name: "RTM Website",
      description:
        "Designed a postpartum parent community site—created the layout in Figma and built it in Webflow with a clean, responsive design.",
      tags: [
        {
          name: "LottieFiles",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "Webflow CMS",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://www.runtellmom.com/",
      source_code_link: "https://www.runtellmom.com/",
    },
    {
      name: "Singles Hub",
      description:
        "Built a responsive Webflow site for a Christian singles platform in Africa by converting a Figma design and integrating Memberstack for user authentication.",
      tags: [
        {
          name: "Finsweet",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleAnalytics",
          color: "green-text-gradient",
        },
        {
          name: "Memberstack",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://www.olimsingleshub.com/",
      source_code_link: "https://www.olimsingleshub.com/",
    },
    {
      name: "Stay Vera",
      description:
        "A sleek, mobile-responsive website crafted in Webflow from a Figma design. Prioritized smooth transitions and a calm, premium aesthetic to deliver a stylish and modern stay experience for travelers.",
      tags: [
        {
          name: "Webflow CMS",
          color: "blue-text-gradient",
        },
        {
          name: "Typeform",
          color: "green-text-gradient",
        },
        {
          name: "Outseta",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://www.stayvera.com/",
      source_code_link: "https://www.stayvera.com/",
    },
  ];
  
  export const cProject = [
    {
      name: "Velasca Fashion",
      description:
        "Developed a sleek and modern Shopify storefront for Velasca Fashion using the Dawn theme. Customized Liquid and JSON files for flexible layout control, aligning the design with the brand’s bold and polished identity.",
      tags: [
        {
          name: "Dawn theme",
          color: "blue-text-gradient",
        },
        {
          name: "Shopify App",
          color: "green-text-gradient",
        },
        {
          name: "Fashion",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://www.velasca.com/",
      source_code_link: "https://www.velasca.com/",
    },
    {
      name: "H&S Beauty",
      description:
        "Built a bold Shopify beauty store using the Horizon theme, with custom Liquid and JSON edits for brand-aligned design and flexibility.",
      tags: [
        {
          name: "Beauty",
          color: "blue-text-gradient",
        },
        {
          name: "Shopify",
          color: "green-text-gradient",
        },
        {
          name: "Horizon theme",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://www.hshairandskin.com/",
      source_code_link: "https://www.hshairandskin.com/",
    },
    {
      name: "RFE Rentals",
      description:
        "eveloped a clean, responsive Shopify rental site with custom Dawn theme edits for flexible design and smooth user experience",
      tags: [
        {
          name: "Rentals",
          color: "blue-text-gradient",
        },
        {
          name: "Dawn theme",
          color: "green-text-gradient",
        },
        {
          name: "Shopify",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://rentforevent.com/la/",
      source_code_link: "https://rentforevent.com/la/",
    },
    
  ];
  
  export const webProject = [
    {
      name: "Safehands Medicals",
      description:
        "Built with WordPress using Elementor and WPForms, this responsive medical website reflects a clean, professional healthcare brand with user-friendly design.",
      tags: [
        {
          name: "Health",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://safehandshhc.com/",
      source_code_link: "https://safehandshhc.com/",
    },
    {
      name: "Dental Website",
      description:
        "Redesigned a professional dental clinic website using WordPress and Elementor. Delivered a responsive, SEO-optimized 20+ page platform with booking functionality, and iframe embeds",
      tags: [
        {
          name: "Custom CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: dental,
      source_link: "https://plainlanddental.com.au",
      source_code_link: "https://plainlanddental.com.au",
    },
    {
      name: "Multi-Vendor Marketplace",
      description:
        "Developed a fully functional multi-vendor marketplace with affiliate referral features and e-commerce capabilities. Built with WordPress and Divi page builder, supports custom vendor dashboards and 3D UI elements for an engaging UX",
      tags: [
        {
          name: "Divi",
          color: "blue-text-gradient",
        },
        {
          name: "WPForm plugin",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: market,
      source_link: "https://tradelineexpress.co",
      source_code_link: "https://tradelineexpress.co",
    },
   
    {
      name: "Catalyst AG Partners",
      description:
        "Converted a Figma design into a fully functional WordPress website using custom CSS and essential plugins to ensure responsiveness, clean layout, and optimal performance.",
      tags: [
        {
          name: "Divi",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "custom css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://catalystagpartners.com/",
      source_code_link: "https://catalystagpartners.com/",
    },
    {
      name: "Aggressor Horns",
      description:
        "Transformed a detailed Figma design into a visually engaging and functional platform tailored to the brand’s style using Elementor Pro and essential plugins.",
      tags: [
        {
          name: "Elementor pro",
          color: "blue-text-gradient",
        },
        {
          name: "custom css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://aggressorhorns.com/",
      source_code_link: "https://www.figma.com/design/ctVk6pM3ehWvbkfYd0J0p2/Aggressor?node-id=0-1&t=PktGBtbAgoUWY4TY-1",
    },
    {
      name: "Rizz Rentals",
      description:
        "Developed a sleek, fully responsive website for Rizz Rentals by converting Figma designs into a modern interface using Elementor page builder and CSS",
      tags: [
        {
          name: "custom CSS",
          color: "blue-text-gradient",
        },
        {
          name: "RankMath",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://rizzrentals.com/",
      source_code_link: "https://rizzrentals.com/",
    },
  ];
  
export const otherProject = [
  {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://emmybod.github.io/portfolio_site/",
      source_code_link: "https://emmybod.github.io/portfolio_site/",
    },
   
    {
      name: "Dreamers Logistics",
      description:
        "A bold, transport-focused website designed in Figma and built on Squarespace, integrating plugins like WPForms and Elementor for enhanced flexibility and user experience.",
      tags: [
        {
          name: "transport",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://www.dreamersmoving.com/",
      source_code_link: "https://www.dreamersmoving.com/",
  },
    {
      name: "Chit Chat Application",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat2,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
  },
  {
      name: "Aggressor Horns",
      description:
        " The full-face shark snorkel mask is specially designed for leisure snorkelling built with React and vanilla CSS",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "vanilla css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat1,
      source_link: "https://aggressorhorns.com/",
      source_code_link: "https://www.figma.com/design/ctVk6pM3ehWvbkfYd0J0p2/Aggressor?node-id=0-1&t=PktGBtbAgoUWY4TY-1",
    },
    {
      name: "Multi-Vendor Marketplace",
      description:
        "Developed a fully functional multi-vendor marketplace with affiliate referral features and e-commerce capabilities. Built using React and Tailwind CSS, supports custom vendor dashboards and 3D UI elements for an engaging UX",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: market,
      source_link: "https://tradelineexpress.co",
      source_code_link: "https://tradelineexpress.co",
    },
   
   {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds1,
      source_link: "hhttps://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "OMTech Technologies",
      icon: bny,
      iconBg: "#383E56",
      date: "November 2024 - Present",
      link: "",
      points: [
        "Built and launched scalable websites and applications using modern front-end and back-end technologies.",
        "Built pixel-perfect, responsive layouts and optimized backend systems for performance, security, and reliability.",
      
      ],
        link: "https://omtechmasters.co.uk/",
    },
    {
      title: "Freelance React Developer | NextJs | Typescript Developer",
      company_name: " Upwork Community",
      icon: bny,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      link: "",
      points: [
        "Specialized in building dynamic, high-performance React and Next.js applications using TypeScript for scalability and maintainability.",
        "Built pixel-perfect, responsive layouts and optimized backend systems for performance, security, and reliability.",
      
      ],
        link: "https://omtechmasters.co.uk/",
    },
    {
      title: "MERN Stack developer",
      company_name: "Deutrix Tech ",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
      iconBg: "#383E56",
      date: "April 2020 - March 2021 ",
      link: "",
      points: [
       
        "Managed full-cycle MERN stack projects, from development to deployment of scalable web applications.",
        "Built responsive React.js front-end interfaces for smooth user experiences.",
        "Built back-end services and RESTful APIs using Node.js, Express, and MongoDB for efficient data management.",
        
      ],
      link: "https://deutrix.com/",
    },
    {
      title: "Website Speed Optimization ",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Through intensive testing, I identify and resolve all sources of slowness and optimize key web vital scores. ",
        "Collaborating with cross-functional technologies.",
        " On both mobile and desktop devices, I strive to have your site loaded quickly under 2 seconds.",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
    },
   
  ];
  
  const educations = [
    {
      degree: "Bachelor of Computer Science",
      branch:
        "Computer Science",
      marks:
        "GPA : 4.26 / 5",
      name: "Stanford University",
      year: "(2012 - 2016)",
      image: clg,
    },
    {
      degree:
        "Master of Computer Science (MSCS)",
      branch : "Software Engineering",
      marks:
        "GPA : 4.57",
      name: "Harvard University",
      year: "2017 - 2019",
      image: school,
    },
    {
      degree:
        "Frontend Developer",
      branch: "Frontend Development",
      marks:
        "Percentage : 80 %",
      name: "Torbita Computer Institute",
      year: "2020",
      image: torbita,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
