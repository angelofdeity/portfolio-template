// import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { ProjectProps } from "@/types/types";
export const data = {
  summary:
    "Nico is a Backend Developer who loves to build fast ⚡, reliable 🦾 and secure 🔒 web applications.",
};
export const projects: ProjectProps[] = [
  {
    title: "DutyCircle",
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
export const skills = [
  "html",
  "css",
  "react",
  // "mui",
  "tailwind",
  // "bootstrap",
  "javascript",
  "typescript",
  "node",
  "express",
  "next",
  "prisma",
  "mongoDB",
  "postgresql",
  "git",
  "python",
  "linux",
  "flask"
]
  // const projects: ProjectProps[] = [
    // {
    //   title: "Mindfully",
    //   description:
    //     "Mindfully is a website that encourages users to improve their mental health through mindfulness and journaling.",
    //   imgUrl: "/assets/imgs/mindfully1.webp",
    //   githubUrl: "https://github.com/alexisintech/mindfully",
    //   deployedUrl: "https://mindfully.up.railway.app/",
    //   tech: ["bootstrap", "javascript", "node", "express", "mongoDB"],
    // },
    // {
    //   title: "Seize The Day",
    //   description:
    //     "Seize The Day is a task tracking application so that you can organize your day, mindfully.",
    //   imgUrl: "/assets/imgs/seize-the-day.webp",
    //   githubUrl: "https://github.com/alexisintech/seize-the-day",
    //   deployedUrl: "https://seize-the-day.netlify.app/",
    //   tech: ["react", "mui", "javascript", "node", "express", "mongoDB"],
    // },
    // {
    //   title: "CSS Generators API",
    //   description:
    //     "The CSS Generators API provides a directory of efficacious websites that generate CSS design elements.",
    //   imgUrl: "/assets/imgs/cssgeneratorsapi.webp",
    //   githubUrl: "https://github.com/alexisintech/css-generators-api",
    //   deployedUrl: "https://cssgenerators.co/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "AdminMe",
    //   description:
    //     "More than a dashboard; AdminMe includes three fully interactive data tables, a functional calendar, and four different chart types for displaying analytics.",
    //   imgUrl: "/assets/imgs/adminme.webp",
    //   githubUrl: "https://github.com/alexisintech/adminme",
    //   deployedUrl: "https://adminme.netlify.app/",
    //   tech: ["react", "mui", "javascript"],
    // },
  // ];

  export const openSource: ProjectProps[] = [
    // {
    //   title: "Coding Resources API",
    //   description:
    //     "The Coding Resources API serves educational content for a wide variety of computer science topics, languages, and technologies related to web development.",
    //   imgUrl: "/assets/imgs/codingresourcesAPI.webp",
    //   githubUrl: "https://github.com/alexisintech/coding-resources-api",
    //   deployedUrl: "https://coding-resources-api.up.railway.app/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "Full Stack Interview Questions API",
    //   description:
    //     "The Full Stack Interview Questions API consists of 150+ questions that have been asked at behavioural and technical interviews in the Tech field.",
    //   imgUrl: "/assets/imgs/fullstackapi.webp",
    //   githubUrl: "https://github.com/alexisintech/interview-question-api",
    //   deployedUrl: "https://full-stack-interview-prep.up.railway.app/",
    //   tech: ["html", "css", "javascript", "node", "express"],
    // },
    // {
    //   title: "Tic Tac Toe",
    //   description:
    //     "A 2-player tic-tac-toe game with win and draw validation (local only for now).",
    //   imgUrl: "/assets/imgs/tictactoe.webp",
    //   githubUrl: "https://github.com/alexisintech/tic-tac-toe",
    //   deployedUrl: "https://alexisintech-tictactoe.netlify.app/",
    //   tech: ["html", "css", "javascript"],
    // },
  ];

  export const clientWork: ProjectProps[] = [
    // {
    //   title: "Reversah",
    //   description:
    //     "Twitch streamer and Faze1 Top 20 Prospect, Reversah, offers custom-designed Valorant merchandise, as famously seen on tik tok. Popular customers include Tiffae, TenZ, Kyedae, and C9 Annie Dro.",
    //   imgUrl: "/assets/imgs/reversah.webp",
    //   githubUrl: "https://github.com/alexisintech/Reversah.ValorantBanner",
    //   deployedUrl: "https://reversah.com/",
    //   tech: ["html", "css", "javascript", "shopify"],
    // },
    // {
    //   title: "Gen-Z Mon-E",
    //   description:
    //     "James Bowman, financial coach and host of the Gen-Z Mon-E podcast, helps people pay down bad debts, begin investing, and ultimately reach financial peace.",
    //   imgUrl: "/assets/imgs/genzmone.webp",
    //   deployedUrl: "https://genzmone.com/",
    //   tech: ["html", "css", "javascript", "wordpress"],
    // },
  ];
