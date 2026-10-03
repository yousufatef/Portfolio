export const siteConfig = {
  name: "Youssef Atef",
  role: "Software Engineer",
  headline: "Youssef Atef - Software Engineer, Frontend Developer, and Full-Stack Developer in Egypt",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://youssefatef.vercel.app",
  email: "youssef.atef.business@gmail.com",
  phone: "+201115737646",
  location: "Giza, Egypt",
  github: "https://github.com/yousufatef",
  linkedin: "https://www.linkedin.com/in/youssef-atef-elagamy",
  whatsapp: "https://wa.me/201115737646",
  description:
    "Youssef Atef is a Software Engineer in Egypt specializing as a mid-level Frontend Developer and junior Full-Stack Developer with React.js, Next.js, TypeScript, NestJS, Node.js, PostgreSQL, and MongoDB.",
  keywords: [
    "Youssef Atef",
    "Youssef Atef Software Engineer",
    "Youssef Atef Frontend Developer",
    "Youssef Atef Full Stack Developer",
    "Frontend Developer Egypt",
    "React Developer Egypt",
    "Next.js Developer Egypt",
    "Software Engineer Egypt",
    "Full Stack Developer Egypt",
    "React Next.js Developer",
    "TypeScript Developer Egypt",
    "NestJS Developer Egypt",
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "NestJS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "TypeORM",
    "Tailwind CSS",
    "Vue.js",
    "Redux",
    "Zustand",
    "Figma",
  ],
}

export function absoluteUrl(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${cleanPath}`
}
