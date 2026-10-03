export type ProjectCategory = "Front-End" | "Full-Stack"

export type Project = {
  slug: string
  title: string
  shortTitle: string
  description: string
  seoDescription: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
  category: ProjectCategory
  type: "WebApplication" | "SoftwareApplication"
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: "itqan-quran-erp",
    title: "ITQAN Quran Memorization ERP",
    shortTitle: "ITQAN",
    description:
      "Smart Quran memorization center ERP for managing students, teachers, circles, attendance, daily evaluations, and finances.",
    seoDescription:
      "ITQAN is a full-stack ERP built by Youssef Atef with React, TypeScript, NestJS, PostgreSQL, and TypeORM for Quran memorization center operations.",
    image: "/itqan.png",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
    demoLink: "https://itqan-lovat.vercel.app/",
    githubLink: "https://github.com/yousufatef/Itqan-server",
    category: "Full-Stack",
    type: "WebApplication",
    highlights: [
      "Student, teacher, circle, attendance, and evaluation management",
      "Backend architecture with NestJS, PostgreSQL, and TypeORM",
      "Role-aware workflows for education center administration",
    ],
  },
  {
    slug: "pass-residency",
    title: "Pass Residency",
    shortTitle: "Pass Residency",
    description: "Residency, citizenship, and corporate solutions for your global journey.",
    seoDescription:
      "Pass Residency is a multilingual Next.js and TypeScript frontend for residency, citizenship, and corporate service discovery.",
    image: "/passresidency.png",
    tags: ["Next.js", "TypeScript", "NextIntl", "Tailwind CSS"],
    demoLink: "https://www.passresidency.com/en",
    githubLink: "https://www.passresidency.com/en",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Internationalized frontend with Next.js and NextIntl",
      "Responsive service pages for global residency and citizenship offers",
      "Marketing-focused UI built with TypeScript and Tailwind CSS",
    ],
  },
  {
    slug: "pass-wealth-management",
    title: "PASS Wealth Management",
    shortTitle: "PASS Wealth Management",
    description: "Grow wealth and unlock global opportunities with tailored solutions.",
    seoDescription:
      "PASS Wealth Management is a Next.js frontend project focused on wealth management services, responsive layouts, and multilingual content.",
    image: "/passWealthManagement.png",
    tags: ["Next.js", "TypeScript", "NextIntl", "Tailwind CSS"],
    demoLink: "https://www.passwealthmanagement.com/en",
    githubLink: "https://www.passwealthmanagement.com/en",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Next.js service website with TypeScript",
      "Multilingual routing and content with NextIntl",
      "Responsive design for finance and investment service discovery",
    ],
  },
  {
    slug: "satellite-industries",
    title: "Satellite Industries",
    shortTitle: "Satellite Industries",
    description: "Innovative solutions for cleaning, hygiene, water treatment, and related products.",
    seoDescription:
      "Satellite Industries is a Next.js frontend for product and service discovery in cleaning, hygiene, and water treatment.",
    image: "/satelliteIndustries.png",
    tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
    demoLink: "https://satelliteindustries.eu/en",
    githubLink: "https://satelliteindustries.eu/en",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Product-focused frontend built with Next.js and TypeScript",
      "Authentication-ready implementation with Clerk",
      "Responsive catalog and service presentation",
    ],
  },
  {
    slug: "eventhub-platform",
    title: "EventHub Platform",
    shortTitle: "EventHub Platform",
    description: "Event platform with secure login, admin dashboard, and one-click booking.",
    seoDescription:
      "EventHub is a full-stack event booking platform by Youssef Atef using Next.js, TypeScript, Clerk, and Tailwind CSS.",
    image: "/eventhub.png",
    tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
    demoLink: "https://event-booking-ecru.vercel.app/",
    githubLink: "https://github.com/yousufatef/EventBooking",
    category: "Full-Stack",
    type: "WebApplication",
    highlights: [
      "Secure login and user flows with Clerk",
      "Event booking experience with responsive UI",
      "Admin dashboard for event management",
    ],
  },
  {
    slug: "nextjs-todo-management",
    title: "Todo Management App",
    shortTitle: "Todo Management App",
    description: "Manage tasks easily with email/social login and dark/light modes.",
    seoDescription:
      "A Next.js todo management application built with TypeScript, Clerk authentication, Tailwind CSS, and theme support.",
    image: "/nextjs-todo.png",
    tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
    demoLink: "https://next-js-todo-mu.vercel.app/",
    githubLink: "https://github.com/yousufatef/Next.js-To-Do",
    category: "Full-Stack",
    type: "SoftwareApplication",
    highlights: [
      "Task management with authenticated user sessions",
      "Email and social login through Clerk",
      "Dark and light theme support",
    ],
  },
  {
    slug: "ourecommerce-platform",
    title: "OureCommerce Platform",
    shortTitle: "OureCommerce Platform",
    description: "User-friendly e-commerce platform with secure checkout and wishlist.",
    seoDescription:
      "OureCommerce is a React and TypeScript e-commerce frontend featuring Stripe checkout, wishlist flows, Redux Toolkit, and React Hook Form.",
    image: "/ourecom.png",
    tags: ["React.js", "TypeScript", "Stripe", "Bootstrap", "react-hook-form", "redux-persist", "redux-toolkit"],
    demoLink: "https://github.com/yousufatef/oureCommerece",
    githubLink: "https://github.com/yousufatef/oureCommerece",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "E-commerce frontend with product browsing and wishlist features",
      "Stripe checkout integration",
      "State and form management with Redux Toolkit and React Hook Form",
    ],
  },
  {
    slug: "elagamy-store-platform",
    title: "Elagamy-Store Platform",
    shortTitle: "Elagamy-Store Platform",
    description: "Full-stack e-commerce platform with search, PayPal payments, and responsive design.",
    seoDescription:
      "Elagamy-Store is a full-stack e-commerce platform using React, TypeScript, Node.js, Express, MongoDB, JWT, and payment integrations.",
    image: "/e-commerce.png",
    tags: ["React.js", "TypeScript", "Stripe", "Tailwind CSS", "redux-toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    demoLink: "https://github.com/yousufatef/eStore",
    githubLink: "https://github.com/yousufatef/eStore",
    category: "Full-Stack",
    type: "WebApplication",
    highlights: [
      "Full-stack e-commerce architecture with Node.js, Express, and MongoDB",
      "Product search, authentication, and payment flows",
      "Responsive React and TypeScript storefront",
    ],
  },
  {
    slug: "for-ingredients-platform",
    title: "For Ingredients Platform",
    shortTitle: "For Ingredients Platform",
    description: "Search food ingredients easily by name, letter, or type.",
    seoDescription:
      "For Ingredients is a Vue.js and Pinia frontend for discovering food ingredients by name, first letter, or category.",
    image: "/forIngredients.png",
    tags: ["Vue.js", "Pinia", "Tailwind CSS"],
    demoLink: "https://for-ingredients.vercel.app/",
    githubLink: "https://github.com/yousufatef/For-Ingredients",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Ingredient search by name, letter, and type",
      "State management with Pinia",
      "Responsive Tailwind CSS interface",
    ],
  },
  {
    slug: "roofing-agency-platform",
    title: "Roofing Agency Platform",
    shortTitle: "Roofing Agency Platform",
    description: "Platform offering roofing services for customers.",
    seoDescription:
      "Roofing Agency Platform is a responsive React and Tailwind CSS website for presenting roofing services and customer calls to action.",
    image: "/roofingAgency.png",
    tags: ["React.js", "Tailwind CSS"],
    demoLink: "https://roofing-agency-opal.vercel.app/",
    githubLink: "https://github.com/yousufatef/roofing-agency",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Service-focused React landing experience",
      "Responsive sections for customer service discovery",
      "Tailwind CSS visual system",
    ],
  },
  {
    slug: "wyost-app",
    title: "WYOST App",
    shortTitle: "WYOST App",
    description: "Pharmacy platform providing medical guidance and tips.",
    seoDescription:
      "WYOST is a responsive frontend project for a pharmacy guidance and medical tips platform built with HTML, CSS, and JavaScript.",
    image: "/wyost.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://wyost-youssef.netlify.app/",
    githubLink: "https://wyost-youssef.netlify.app/",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Responsive pharmacy information website",
      "Medical tips and guidance presentation",
      "Lightweight static frontend implementation",
    ],
  },
  {
    slug: "restaurant-management-app",
    title: "Restaurant Management App",
    shortTitle: "Restaurant Management App",
    description: "Manage menus and restaurants easily in one app.",
    seoDescription:
      "Restaurant Management App is a Vue.js, Pinia, and Tailwind CSS project for managing restaurant information and menus.",
    image: "/restaurant-management.png",
    tags: ["Vue.js", "Pinia", "Tailwind CSS"],
    demoLink: "https://github.com/yousufatef/Restaurant-Management",
    githubLink: "https://github.com/yousufatef/Restaurant-Management",
    category: "Front-End",
    type: "SoftwareApplication",
    highlights: [
      "Restaurant and menu management interface",
      "Vue.js application state handled with Pinia",
      "Responsive dashboard-style layouts",
    ],
  },
  {
    slug: "weather-forecast",
    title: "Weather Forecast",
    shortTitle: "Weather Forecast",
    description: "View latest weather updates like temperature and rain chances.",
    seoDescription:
      "Weather Forecast is a React and TypeScript frontend for viewing current weather information, temperatures, and rain chances.",
    image: "/weather.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://elagamyweatherforecast.netlify.app/",
    githubLink: "https://github.com/yousufatef/Weather",
    category: "Front-End",
    type: "WebApplication",
    highlights: [
      "Current weather information in a responsive React UI",
      "TypeScript implementation with Tailwind CSS",
      "Weather details such as temperature and rain chances",
    ],
  },
  {
    slug: "firechat-platform",
    title: "fireChat Platform",
    shortTitle: "fireChat Platform",
    description: "Chat platform to send simple messages easily.",
    seoDescription:
      "fireChat is a Vue.js and Firebase chat application for sending lightweight real-time messages.",
    image: "/fireChat.png",
    tags: ["Vue.js", "Firebase"],
    demoLink: "https://fire-chat-seven.vercel.app/",
    githubLink: "https://github.com/yousufatef/fire-chat",
    category: "Full-Stack",
    type: "SoftwareApplication",
    highlights: [
      "Real-time chat experience with Firebase",
      "Vue.js frontend for message sending",
      "Simple responsive messaging interface",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
