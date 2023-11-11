// import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { ProjectProps } from "@/types/types";
export const data = {
  summary:
    "Nico is a Backend Developer who loves to build fast ⚡, reliable 🦾 and secure 🔒 web applications.",
};
export const projects: ProjectProps[] = [
  {
    title: "DutyCircle - Social Todo list App",
    description:
      "DutyCircle is a unique application designed to merge task management with public accountability. Users can create and manage personal tasks while also choosing to share them publicly. The public sharing feature transforms a simple task into a commitment, offering users an external motivation to accomplish their goals. The public feed showcases tasks from various users, giving an opportunity for users to connect over shared objectives or interests.",
    deployedUrl: "https://dutycircle.vercel.app",
    imgUrl: "/assets/imgs/dutycircle.png",
    githubUrl: "https://github.com/codelawani/duty_circle",
    tech: ["next", "tailwind", "postgresql", "prisma"],
  },
  {
    title: "ProAlx",
    description:
      "ProAlx is a cutting-edge application designed to enhance productivity and foster connections among like-minded developers. Our mission is to connect developers, empowering them with valuable insights(leveraging wakatime and GitHub stats) throughout their coding journey.",
    deployedUrl: "https://proalx.live",
    imgUrl: "/assets/imgs/proalx.png",
    githubUrl: "https://github.com/codelawani/proalx",
    tech: [
      "react",
      "flask",
      // "Mysql",
      "tailwind",
      // "Wakatime API",
      // "Github API",
    ],
  },
];
export const SOCIALS = [
  {
    id: 1,
    title: "Mail",
    href: "mailto:codelawani@gmail.com",
    // icon: Mail,
  },
  {
    id: 2,
    title: "GitHub",
    href: "https://github.com/codelawani",
    // icon: Github,
  },
  {
    id: 3,
    title: "Twitter",
    href: "https://twitter.com/codelawani",
    // icon: Twitter,
  },
  {
    id: 4,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/codelawani/",
    // icon: Linkedin,
  },
];
